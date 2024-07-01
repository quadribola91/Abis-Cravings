import React, { useState } from "react";
import Abis from "./Abis.jpg";

export default function Navbar() {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="container bg-gray-100 fixed top-0 z-50 overflow-hidden">
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-20 w-30 rounded-full"
                  src={Abis}
                  alt="Your Company"
                />
              </div>
            </div>

            {/* Hidden on large screens, visible on small screens */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-500 focus:outline-none"
              >
                <svg
                  className="h-11 w-11"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Hidden on small screens, visible on large screens */}
            <div className="hidden md:block">
              <div className="ml-15 flex items-baseline space-x-6">
                <a
                  href="#"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  SERVICES
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  ABOUT US
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  PARTNER
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  CONTACT
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-12" id="mobile-menu">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                <a
                  href="#"
                  className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                  aria-current="page"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  SERVICES
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  ABOUT US
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  PARTNER
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  CONTACT
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
