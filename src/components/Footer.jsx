import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-4">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <h2 className="font-semibold text-lg">
            🚆 Advance Railway Ticket Date Calculator
          </h2>

          <div className="flex gap-4 text-sm">
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-yellow-300">
              About
            </Link>
            <Link to="/useful-links" className="hover:text-yellow-300">
              Useful Links
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700"></div>

        {/* Bottom Row */}
        <div className="text-xs text-center text-blue-200 space-y-1">
          <p>
            © {new Date().getFullYear()} Advance Railway Ticket Date Calculator.
            All rights reserved.
          </p>

          <p>
            This website is not affiliated with IRCTC or Indian Railways.
            Booking rules are based on publicly available information.
          </p>
        </div>

      </div>
    </footer>
  );
}
