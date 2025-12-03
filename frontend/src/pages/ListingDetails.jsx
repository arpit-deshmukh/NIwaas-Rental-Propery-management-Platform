import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
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

  return (
    <div className="p-6 max-w-6xl mx-auto">

    {/* title */}
      <h1 className="text-3xl font-semibold mb-2">{listing.title}</h1>
      <p className="text-gray-600">{listing.location?.address}</p>

   {/* image gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {listing.images?.length ? (
          listing.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Listing"
              className="w-full h-64 object-cover rounded-lg"
            />
          ))
        ) : (
          <div className="text-gray-500">No images available</div>
        )}
      </div>

   
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">About this place</h2>
        <p className="text-gray-700 leading-relaxed">{listing.description}</p>
      </div>


      <div className="mt-4 text-lg font-semibold">
        Price: ₹{listing.price} / night
      </div>

{/* map placeholder */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Location</h2>
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
          <span className="text-gray-600">Map will be here</span>
        </div>
      </div>

    </div>
  );
};

export default ListingDetails;
