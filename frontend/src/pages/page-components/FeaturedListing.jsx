import { useEffect, useState } from "react";
import api from "../../services/api";
import ListingCard from "../../components/ListingCard";

export default function FeaturedListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await api.get("/listings");
        setListings(res.data.slice(0, 6));
      } catch (err) {
        console.error("Failed to load featured listings");
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <section className="bg-base">
      <div className="mx-auto max-w-7xl px-6 py-20">


        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
          <div>
            <h2 className="text-3xl font-semibold">
              Homes people are exploring
            </h2>
            <p className="mt-2 text-gray-600 max-w-md">
              A few rental homes recently added on Niwaas.
            </p>
          </div>

          <a
            href="/listings"
            className="mt-4 sm:mt-0 text-indigo-600 text-sm font-medium"
          >
            View all homes →
          </a>
        </div>


        {loading ? (
          <div className="text-center text-gray-500">
            Loading homes...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((item) => (
              <ListingCard key={item._id} item={item} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
