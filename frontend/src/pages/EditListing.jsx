import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

const EditListing = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    address: "",
  });

  const [images, setImages] = useState([]);
  const [msg, setMsg] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    loadListing();
  }, []);

  const loadListing = async () => {
    try {
      const res = await api.get(`/listings/${id}`);

      setForm({
        title: res.data.title,
        description: res.data.description,
        price: res.data.price,
        address: res.data.location?.address,
      });

      setImages(res.data.images || []);
    } catch (err) {
      console.error("Failed to load listing:", err.message);
    }
  };


  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await api.post("/upload", formData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setImages((prev) => [...prev, res.data.url]);
    } catch (err) {
      console.error("Upload error:", err.message);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

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

      await api.put(
        `/listings/${id}`,
        {
          title: form.title,
          description: form.description,
          price: Number(form.price),
          location: { 
            address: form.address,
            lat,
            lng
          },
          images,
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      setMsg("Listing updated successfully.");
    } catch (err) {
      console.error("Update error:", err.message);
      setMsg("Failed to update listing.");
    }
  };

  const removeImage = (img) => {
    setImages(images.filter((i) => i !== img));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Edit Listing</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          className="w-full border p-2 rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          name="description"
          className="w-full border p-2 rounded"
          rows="4"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          type="number"
          name="price"
          className="w-full border p-2 rounded"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input
          type="text"
          name="address"
          className="w-full border p-2 rounded"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />


        <div className="border p-3 rounded">
          <p className="font-medium mb-2">Images</p>
          <input type="file" onChange={uploadImage} />

          <div className="grid grid-cols-3 gap-2 mt-3">
            {images.map((img, i) => (
              <div key={i} className="relative">
                <img
                  src={img}
                  alt="listing"
                  className="h-24 w-full object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => removeImage(img)}
                  className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full bg-black text-white py-2 rounded">
          Save Changes
        </button>

        {msg && <p className="mt-3 text-center">{msg}</p>}
      </form>
    </div>
  );
};

export default EditListing;
