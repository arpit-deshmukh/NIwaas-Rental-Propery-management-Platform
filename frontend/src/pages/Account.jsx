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
        headers: { Authorization: `Bearer ${token}` },
      });

      const bookingRes = await api.get("/bookings/me", {
        headers: { Authorization: `Bearer ${token}` },
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
    <div className="max-w-5xl mx-auto px-6 py-10 fade-in">
      {/* Profile */}
      <div className="card mb-8">
        <h1 className="text-3xl font-semibold">
          Your Account
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {user?.email}
        </p>
      </div>

      {/* Bookings */}
      <h2 className="text-2xl font-semibold mb-4">
        Your Bookings
      </h2>

      {bookings.length === 0 && (
        <p className="text-gray-500">
          No bookings yet.
        </p>
      )}

      <div className="space-y-4">
        {bookings.map((b) => (
          <div key={b._id} className="card flex gap-4">
            <img
              src={b.listing?.images?.[0]}
              alt="listing"
              className="w-32 h-24 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h3 className="text-lg font-semibold">
                {b.listing?.title}
              </h3>

              <p className="text-sm text-gray-500">
                {b.startDate?.slice(0, 10)} →{" "}
                {b.endDate?.slice(0, 10)}
              </p>

              <p className="font-medium mt-1">
                ₹{b.totalPrice}
                <span className="text-sm text-gray-500">
                  {" "}
                  total
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
