import { Link } from "react-router-dom";

const ListingCard = ({ item }) => {
  return (
    <Link to={`/listing/${item._id}`}>
      <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

        <div className="h-52 w-full bg-gray-200">
          {item.images?.[0] ? (
            <img
              src={item.images[0]}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              No Image
            </div>
          )}
        </div>

        <div className="p-3">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-600 text-sm mt-1">
            {item.location?.address}
          </p>
          <p className="mt-2 font-medium">₹{item.price}/day</p>
        </div>

      </div>
    </Link>
  );
};

export default ListingCard;
