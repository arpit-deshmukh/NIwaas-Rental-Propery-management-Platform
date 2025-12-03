import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full border-b py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-semibold tracking-tight">
        Airbnb Clone
      </Link>

      <Link
        to="/create-listing"
        className="bg-black text-white px-4 py-2 rounded-lg"
      >
        Add Listing
      </Link>
    </div>
  );
};

export default Navbar;
