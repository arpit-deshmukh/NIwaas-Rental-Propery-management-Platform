import { useState } from "react";
import api from "../services/api";

const CreateListing = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    address: "",
  });

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const token = localStorage.getItem("token");

      const res = await api.post("/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setImages((prev) => [...prev, res.data.url]);
    } catch (err) {
      console.error("Upload error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    const token = localStorage.getItem("token");
    if (!token) return alert("Login first");

    try {
      let lat = null;
      let lng = null;

      try {
        const geoRes = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            form.address
          )}`
        );
        const geoData = await geoRes.json();
        if (geoData && geoData[0]) {
          lat = parseFloat(geoData[0].lat);
          lng = parseFloat(geoData[0].lon);
        }
      } catch {}

      const payload = {
        title: form.title,
        description: form.description,
        price: Number(form.price),
        location: {
          address: form.address,
          lat,
          lng,
        },
        images,
      };

      await api.post("/listings", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMsg("Listing created successfully");
      setForm({ title: "", description: "", price: "", address: "" });
      setImages([]);
    } catch (err) {
      console.error("Listing error:", err);
      setMsg("Failed to create listing");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 fade-in">
      <div className="card">
        <h1 className="text-3xl font-semibold mb-6">
          Create New Listing
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input"
            value={form.title}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="4"
            className="input"
            value={form.description}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price per day"
            className="input"
            value={form.price}
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            className="input"
            value={form.address}
            onChange={handleChange}
          />

          <div className="border rounded-xl p-4 bg-white/70">
            <p className="font-medium mb-2">Upload Images</p>

            <input type="file" onChange={handleImageUpload} />

            {loading && (
              <p className="text-sm text-gray-500 mt-2">
                Uploading...
              </p>
            )}

            {images.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mt-4">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="uploaded"
                    className="h-24 w-full object-cover rounded-lg"
                  />
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="btn w-full mt-4"
          >
            Create Listing
          </button>

          {msg && (
            <p className="text-center text-sm mt-3">
              {msg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateListing;
