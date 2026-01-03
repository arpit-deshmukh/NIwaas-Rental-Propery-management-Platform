import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Left: Logo (same position as before) */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight text-gray-900"
        >
          Airbnb Clone
        </Link>

        {/* Right: Actions (same position as before) */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link to="/create-listing" className="btn">
                Add Listing
              </Link>

              <Link to="/my-listings" className="btn-outline">
                My Listings
              </Link>

              <Link to="/account" className="btn-outline">
                Account
              </Link>

              <button onClick={logout} className="btn-outline">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-outline">
                Login
              </Link>

              <Link to="/register" className="btn">
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
