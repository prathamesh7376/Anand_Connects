import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/AnandConnects-LOGO.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-20 bg-red-600 border-b border-black/10">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="h-20 w-auto object-contain rounded-xl"
            />
          </Link>
          <span className="text-white text-xl ml-4 font-bold hidden md:block">
            Anand Connects
          </span>
        </div>

        {/* Hamburger Menu Icon for smaller screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-gray-400"
                  : "text-white hover:text-blue-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-gray-400"
                  : "text-white hover:text-blue-400"
              }
            >
              Makhana Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-gray-400"
                  : "text-white hover:text-blue-400"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-gray-400"
                  : "text-white hover:text-blue-400"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Sidebar for mobile view */}
        <div
          className={`fixed top-0 right-0 h-full bg-red-600 shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out w-64 z-30 md:hidden`}
        >
          <div className="flex justify-between items-center px-4 py-4">
            <span className="text-white font-bold text-xl">Menu</span>
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Sidebar Links */}
          <ul className="mt-4 space-y-4 px-4">
            <li>
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-gray-400"
                    : "text-white text-lg hover:text-gray-300 block"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-gray-400"
                    : "text-white text-lg hover:text-gray-300 block"
                }
              >
                Makhana Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-gray-400"
                    : "text-white text-lg hover:text-gray-300 block"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-gray-400"
                    : "text-white text-lg hover:text-gray-300 block"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
