import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-lg">
          🚆 Railway Tools
        </div>

        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/useful-links" className="hover:text-yellow-300">
              Useful Links
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
