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

      <div className="flex items-center gap-4">
  <Link
    to="/create-listing"
    className="bg-black text-white px-4 py-2 rounded-lg"
  >
    Add Listing
  </Link>

  <Link
    to="/account"
    className="border px-4 py-2 rounded-lg"
  >
    Account
  </Link>
</div>
    </div>
  );
};

export default Navbar;
