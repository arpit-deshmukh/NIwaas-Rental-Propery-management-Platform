const Footer = () => {
  return (
    <footer className="mt-24 bg-gradient-to-b from-gray-100 via-gray-100 to-gray-200 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 text-sm text-gray-600">
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Niwaas
            </h3>
            <p className="leading-relaxed text-gray-500">
              A rental booking platform to explore stays,
              host listings, and manage bookings.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-3">
              Explore
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-gray-800 transition">Browse Listings</li>
              <li className="hover:text-gray-800 transition">Create a Listing</li>
              <li className="hover:text-gray-800 transition">My Bookings</li>
              <li className="hover:text-gray-800 transition">My Listings</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-3">
              Hosting
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-gray-800 transition">Why Host</li>
              <li className="hover:text-gray-800 transition">Hosting Guidelines</li>
              <li className="hover:text-gray-800 transition">Safety & Trust</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-3">
              Support
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-gray-800 transition">Help Center</li>
              <li className="hover:text-gray-800 transition">Terms & Conditions</li>
              <li className="hover:text-gray-800 transition">Privacy Policy</li>
            </ul>
          </div>
        </div>


        <div className="mt-16 pt-6 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <span>© 2026 Niwaas</span>

          <span className="mt-2 sm:mt-0">
            Developed by{" "}
            <a
              href="https://github.com/arpit-deshmukh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Arpit
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
