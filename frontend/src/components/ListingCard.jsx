import { Link } from "react-router-dom";

const ListingCard = ({ item }) => {
  return (
    <Link
      to={`/listing/${item._id}`}
      className="block no-underline hover:no-underline focus:no-underline"
    >
      <div
        className="
          group
          relative
          rounded-xl overflow-hidden
          border bg-white
          shadow-sm
          transition-all duration-500 ease-out
          hover:-translate-y-1 hover:shadow-xl
          hover:[transform:rotateY(6deg)]
          [&_*]:no-underline
        "
      >
        <div className="h-52 w-full bg-gray-200 overflow-hidden">
          {item.images?.[0] ? (
            <img
              src={item.images[0]}
              alt={item.title}
              className="
                h-full w-full object-cover
                transition-transform duration-500 ease-out
                group-hover:scale-110
              "
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              No Image
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-base font-semibold text-gray-900 transition-colors group-hover:text-indigo-600">
            {item.title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {item.location?.address}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900">
              ₹{item.price}/day
            </span>

            <span className="text-xs font-medium text-indigo-600 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              View →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
