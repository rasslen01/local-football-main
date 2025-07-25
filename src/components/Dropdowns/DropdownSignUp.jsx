// components/Dropdowns/DropdownSignUp.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function DropdownSignUp() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ml-3 mb-3 ease-linear transition-all duration-150"
        type="button"
      >
        <i className="fas fa-user mr-2"></i> Sign Up
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
          <Link
            to="/register"
            className="block px-4 py-2 text-sm text-blueGray-700 hover:bg-blueGray-100"
          >
            player
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 text-sm text-blueGray-700 hover:bg-blueGray-100"
          >
            Pitch Managers
          </Link>
        </div>
      )}
    </div>
  );
}
