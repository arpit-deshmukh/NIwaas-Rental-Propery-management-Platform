import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const userRes = await api.get("/auth/me", {
        headers: { Authorization: `Bearer ${token}` }
      });

      const bookingRes = await api.get("/bookings/me", {
        headers: { Authorization: `Bearer ${token}` }
      });

      setUser(userRes.data);
      setBookings(bookingRes.data);
    } catch (err) {
      console.error("Account Error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold">Your Account</h1>
      <p className="text-gray-600 mt-1">{user?.email}</p>

      {/* bookings */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Your Bookings</h2>

      {bookings.length === 0 && (
        <p className="text-gray-500">No bookings yet.</p>
      )}

      <div className="space-y-4">
        {bookings.map((b) => (
          <div
            key={b._id}
            className="border p-4 rounded-lg shadow-sm flex gap-4"
          >
            <img
              src={b.listing?.images?.[0]}
              alt="listing"
              className="w-32 h-24 object-cover rounded"
            />

            <div>
              <h3 className="text-lg font-semibold">{b.listing?.title}</h3>
              <p className="text-gray-600 text-sm">
                {b.startDate?.slice(0, 10)} → {b.endDate?.slice(0, 10)}
              </p>
              <p className="font-medium mt-1">₹{b.totalPrice} total</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
