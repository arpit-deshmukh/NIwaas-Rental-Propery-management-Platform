import { useEffect, useState } from "react";
import api from "../services/api";
import ListingCard from "../components/ListingCard";
import Hero from "./page-components/Hero"
import WhyNiwaas from "./page-components/WhyNiwas"

const Home = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchListings = async () => {
    try {
      const res = await api.get("/listings");
      setListings(res.data);
    } catch (err) {
      console.error("Error fetching listings:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-10 text-gray-600">
        Loading listings...
      </div>
    );
  }

  if (!listings.length) {
    return (
      <div className="text-center mt-10 text-gray-600">
        No listings found.
      </div>
    );
  }

  return (
    <>
      
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {listings.map((item) => (
        <ListingCard key={item._id} item={item} />
      ))}
    </div>
    
    </>
  
  );
};

export default Home;
