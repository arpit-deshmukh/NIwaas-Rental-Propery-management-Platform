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
        headers: { Authorization: `Bearer ${token}` }
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
        headers: { Authorization: `Bearer ${token}` }
      });

      setListings(listings.filter((l) => l._id !== id));
    } catch (err) {
      console.error("Delete error:", err.message);
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Your Listings</h1>

      {listings.length === 0 && (
        <p className="text-gray-600">You haven't created any listings yet.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {listings.map((item) => (
          <div key={item._id} className="border rounded-lg overflow-hidden shadow-sm">
            <img
              src={item.images?.[0]}
              alt="listing"
              className="h-40 w-full object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.location?.address}</p>
              <p className="font-medium mt-1">₹{item.price}/day</p>

              <button
                onClick={() => deleteListing(item._id)}
                className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => updateListing(item._id)}
                className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
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
