import { supabaseService, json } from "../_lib/supabase.js";

export default async function handler(req, res) {
  try {
    if (req.method !== "GET") return json(res, 405, { error: "Method not allowed" });

    const supabase = supabaseService();

    // Public list for now (no auth): open jobs from jobs_public
    const { data, error } = await supabase
      .from("jobs_public")
      .select("id, work_type, zip_code, search_radius_miles, status, created_at, description")
      .eq("status", "open")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) return json(res, 400, { error: error.message });

    return json(res, 200, { jobs: data ?? [] });
  } catch (e) {
    console.error("jobs/available error:", e);
    return json(res, 500, { error: "Server error" });
  }
}
