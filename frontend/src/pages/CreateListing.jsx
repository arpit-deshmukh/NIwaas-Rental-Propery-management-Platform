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

  // IMAGE UPLOAD
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
          Authorization: `Bearer ${token}`
        }
      });

      setImages((prev) => [...prev, res.data.url]);
    } catch (err) {
      console.error("Upload error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  // SUBMIT LISTING
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    const token = localStorage.getItem("token");
    if (!token) {
      return alert("Login first");
    }

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
      } catch (e) {
        console.error("Geocoding error:", e);
      }

      const payload = {
        title: form.title,
        description: form.description,
        price: Number(form.price),
        location: {
          address: form.address,
          lat,
          lng
        },
        images
      };

      await api.post("/listings", payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
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
    <div className="max-w-2xl mx-auto p-6">

      <h1 className="text-3xl font-semibold mb-6">Create New Listing</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full border p-2 rounded"
          rows="4"
          value={form.description}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price per night"
          className="w-full border p-2 rounded"
          value={form.price}
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          className="w-full border p-2 rounded"
          value={form.address}
          onChange={handleChange}
        />

        {/* image upload section */}
        <div className="border p-3 rounded">
          <p className="mb-2 font-medium">Upload Images</p>
          <input type="file" onChange={handleImageUpload} />

          {loading && <p className="text-gray-600 mt-2">Uploading...</p>}

          {/* Preview uploaded images */}
          <div className="grid grid-cols-3 gap-2 mt-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="uploaded"
                className="h-24 w-full object-cover rounded"
              />
            ))}
          </div>
        </div>

        <button className="w-full bg-black text-white py-2 rounded">
          Create Listing
        </button>

        {msg && <p className="text-center mt-3">{msg}</p>}
      </form>
    </div>
  );
};

export default CreateListing;
