import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import MapLeaflet from "../components/MapLeaflet";

const ListingDetails = () => {
  const { id } = useParams();

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await api.get(`/listings/${id}`);
        setListing(res.data);
      } catch (err) {
        console.error("Error loading listing:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10">Loading listing...</div>;
  }

  if (!listing) {
    return (
      <div className="text-center mt-10 text-gray-600">
        Listing not found.
      </div>
    );
  }

  const handleBooking = async () => {
    setMsg("");

    const token = localStorage.getItem("token");
    if (!token) {
      setMsg("Please login first");
      return;
    }

    if (!startDate || !endDate) {
      setMsg("Choose valid dates");
      return;
    }

    const diff =
      (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);

    if (diff <= 0) {
      setMsg("End date must be after start date");
      return;
    }

    const totalPrice = diff * listing.price;

    try {
      await api.post(
        "/bookings",
        {
          listingId: listing._id,
          startDate,
          endDate,
          totalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMsg("Booking successful!");
    } catch (err) {
      console.error("Booking Error:", err.message);
      setMsg("Booking failed");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 fade-in">

      <div className="card bg-white/95 border shadow-sm">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold mb-1">
            {listing.title}
          </h1>
          <p className="text-sm text-gray-500">
            {listing.location?.address}
          </p>
        </div>

        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {listing.images?.length ? (
              listing.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Listing"
                  className="w-full h-64 object-cover rounded-xl"
                />
              ))
            ) : (
              <div className="text-gray-500">No images available</div>
            )}
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-2">
            About this place
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {listing.description}
          </p>
        </div>

        <div className="mb-6 text-lg font-semibold">
          ₹{listing.price}{" "}
          <span className="text-sm font-normal text-gray-500">
            / day
          </span>
        </div>

        <div className="card border-2 border-gray-200 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Book this stay
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Start Date</label>
              <input
                type="date"
                className="input"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium">End Date</label>
              <input
                type="date"
                className="input"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          {startDate && endDate && (
            <p className="mt-3 font-medium">
              Total Price: ₹
              {(() => {
                const diff =
                  (new Date(endDate) - new Date(startDate)) /
                  (1000 * 60 * 60 * 24);
                return diff > 0 ? diff * listing.price : 0;
              })()}
            </p>
          )}

          <button
            onClick={handleBooking}
            className="btn w-full mt-4"
          >
            Book Now
          </button>

          {msg && (
            <p className="text-center text-sm mt-2">
              {msg}
            </p>
          )}
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="card">
          <h2 className="text-xl font-semibold mb-3">
            Location
          </h2>

          {typeof listing?.location?.lat === "number" &&
          typeof listing?.location?.lng === "number" ? (
            <MapLeaflet
              lat={listing.location.lat}
              lng={listing.location.lng}
              title={listing.title}
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-xl">
              <span className="text-gray-600">
                Location data not available
              </span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ListingDetails;
