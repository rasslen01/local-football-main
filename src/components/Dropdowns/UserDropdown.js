import React, { useState, useRef, useEffect } from "react";

export default function DropdownSignUp() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const btnRef = useRef();
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !btnRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left">
      <button
        ref={btnRef}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="bg-white text-blueGray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 flex items-center gap-2"
      >
        <i className="fas fa-user-plus"></i> Sign Up
      </button>

      {dropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
        >
          <ul className="py-1 text-sm text-blueGray-700">
            <li>
              <a href="/signup/player" className="block px-4 py-2 hover:bg-gray-100">
                Joueur
              </a>
            </li>
            <li>
              <a href="/signup/organizer" className="block px-4 py-2 hover:bg-gray-100">
                Organisateur
              </a>
            </li>
            <li>
              <a href="/signup/visitor" className="block px-4 py-2 hover:bg-gray-100">
                Visiteur
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
