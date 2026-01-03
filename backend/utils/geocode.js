import axios from "axios";

export const geocodeAddress = async (address) => {
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

    const res = await axios.get(url, {
      headers: { "User-Agent": "Airbnb-MERN-Project" }
    });

    if (res.data.length === 0) return null;

    return {
      lat: parseFloat(res.data[0].lat),
      lng: parseFloat(res.data[0].lon),
    };
  } catch (err) {
    console.error("Geocoding error:", err.message);
    return null;
  }
};
