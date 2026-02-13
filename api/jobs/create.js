import { supabaseService, json } from "../_lib/supabase.js";
import { geocodeUS } from "../_lib/mapbox.js";

function getIp(req) {
  const xff = req.headers["x-forwarded-for"];
  const ip = (Array.isArray(xff) ? xff[0] : (xff || "")).split(",")[0].trim();
  return ip || req.socket?.remoteAddress || "unknown";
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") return json(res, 405, { error: "Method not allowed" });

    const ip = getIp(req);

    // Parse body (Vercel provides req.body for JSON in most cases, but keep fallback)
    const body = req.body ?? {};
    const {
      workType,
      zipCode,
      radius,
      description,
      name,
      email,
      phone,
      // Optional if your frontend sends these later:
      latitude,
      longitude,
    } = body;

    if (!workType || !zipCode || !radius || !name || !email || !phone) {
      return json(res, 400, { error: "Missing required fields" });
    }

    let lat = latitude;
    let lng = longitude;

    // If coordinates not provided, geocode by ZIP
    if (typeof lat !== "number" || typeof lng !== "number") {
      const geo = await geocodeUS(String(zipCode));
      if (!geo) return json(res, 400, { error: "Could not geocode ZIP code" });
      lat = geo.lat;
      lng = geo.lng;
    }

    const supabase = supabaseService();

    const { data: job, error } = await supabase
      .from("jobs")
      .insert({
        customer_id: null,
        customer_user_id: null,
        contact_name: name,
        contact_email: email,
        contact_phone: phone,
        work_type: workType,
        description: description ?? null,
        zip_code: String(zipCode),
        search_radius_miles: Number(radius),
        location_point: `POINT(${lng} ${lat})`,
        status: "open",
      })
      .select("id, work_type, zip_code, search_radius_miles, status, created_at")
      .single();

    if (error) return json(res, 400, { error: error.message });

    // NOTE: matching + notifications will be added next.
    return json(res, 201, { success: true, job });
  } catch (e) {
    console.error("jobs/create error:", e);
    return json(res, 500, { error: "Server error" });
  }
}
