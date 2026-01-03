import { useEffect, useState, useContext } from "react";
import api from "../services/api";
import { AuthContext } from "../store/AuthContext";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const loadListings = async () => {
    try {
      const res = await api.get(`/listings?host=${user.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setListings(res.data);
    } catch (err) {
      console.error("Error fetching my listings:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) loadListings();
  }, [user]);

  const deleteListing = async (id) => {
    try {
      await api.delete(`/listings/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setListings((prev) => prev.filter((l) => l._id !== id));
    } catch (err) {
      console.error("Delete error:", err.message);
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 fade-in">
      <h1 className="text-3xl font-semibold mb-6">Your Listings</h1>

      {listings.length === 0 && (
        <p className="text-gray-500">
          You haven't created any listings yet.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((item) => (
          <div key={item._id} className="card">
            <img
              src={item.images?.[0]}
              alt="listing"
              className="h-44 w-full object-cover rounded-lg mb-3"
            />

            <h3 className="text-lg font-semibold mb-1">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500">
              {item.location?.address}
            </p>

            <p className="font-medium mt-1">
              ₹{item.price}
              <span className="text-sm text-gray-500"> / day</span>
            </p>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => deleteListing(item._id)}
                className="flex-1 px-3 py-2 rounded-lg text-sm font-medium
                           bg-red-50 text-red-600
                           transition hover:bg-red-100"
              >
                Delete
              </button>

              <button
                className="flex-1 px-3 py-2 rounded-lg text-sm font-medium
                           bg-gray-100 text-gray-700
                           transition hover:bg-gray-200"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListings;
