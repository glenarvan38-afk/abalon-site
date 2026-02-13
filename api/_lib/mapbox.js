import fetch from "node-fetch";

export async function geocodeUS(query) {
  const token =
  process.env.VITE_MAPBOX_TOKEN ||
  process.env.MAPBOX_TOKEN ||
  process.env.MAPBOX_ACCESS_TOKEN;
  if (!token) throw new Error("Missing MAPBOX_TOKEN (or MAPBOX_ACCESS_TOKEN) env var");

  const url =
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json` +
    `?access_token=${token}&country=US&types=postcode,address&limit=1`;

  const r = await fetch(url);
  if (!r.ok) throw new Error(`Mapbox geocoding failed: ${r.status}`);
  const data = await r.json();

  const feature = data?.features?.[0];
  if (!feature?.center?.length) return null;

  const [lng, lat] = feature.center;
  return {
    lat,
    lng,
    place_name: feature.place_name,
  };
}
