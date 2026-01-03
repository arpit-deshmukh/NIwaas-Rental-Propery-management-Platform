import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="w-full border-b py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-semibold tracking-tight">
        Airbnb Clone
      </Link>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link
              to="/create-listing"
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Add Listing
            </Link>
            <Link
              to="/my-listings"
              className="border px-4 py-2 rounded-lg"
            >
              My Listings
            </Link>

            <Link
              to="/account"
              className="border px-4 py-2 rounded-lg"
            >
              Account
            </Link>
 

            <button
              onClick={logout}
              className="border px-4 py-2 rounded-lg"
            >
              Logout
            </button>

          </>
        ) : (
          <>
            <Link
              to="/login"
              className="border px-4 py-2 rounded-lg"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="border px-4 py-2 rounded-lg"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
