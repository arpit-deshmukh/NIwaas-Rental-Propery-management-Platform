import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="w-full border-b border-gray-200 bg-white/75 backdrop-blur-md">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight text-gray-900
                     transition hover:text-blue-600"
        >
          Airbnb Clone
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {user ? (
            <>
              {/* Primary action */}
              <Link
                to="/create-listing"
                className="px-4 py-2 rounded-xl text-sm font-medium
                           bg-blue-600 text-white
                           transition hover:bg-blue-700 hover:shadow-md"
              >
                Add Listing
              </Link>

              {/* Secondary actions */}
              <Link
                to="/my-listings"
                className="px-4 py-2 rounded-xl text-sm font-medium
                           text-gray-700 bg-gray-100
                           transition hover:bg-gray-200 hover:text-gray-900"
              >
                My Listings
              </Link>

              <Link
                to="/account"
                className="px-4 py-2 rounded-xl text-sm font-medium
                           text-gray-700 bg-gray-100
                           transition hover:bg-gray-200 hover:text-gray-900"
              >
                Account
              </Link>

              {/* Destructive */}
              <button
                onClick={logout}
                className="px-4 py-2 rounded-xl text-sm font-medium
                           text-red-600 bg-red-50
                           transition hover:bg-red-100 hover:text-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-xl text-sm font-medium
                           text-gray-700 bg-gray-100
                           transition hover:bg-gray-200 hover:text-gray-900"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-4 py-2 rounded-xl text-sm font-medium
                           bg-blue-600 text-white
                           transition hover:bg-blue-700 hover:shadow-md"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
