import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { AppContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { UserButton, SignedIn, SignedOut } from "@clerk/clerk-react";

const Navbar = () => {
  const { theme, setTheme } = useContext(AppContext);

  return (
    <nav className="sticky top-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 tracking-wide hover:opacity-80 transition"
        >
          Test
        </Link>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-x-6 font-medium">
          <a
            href="#posts"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Posts
          </a>
          <a
            href="#users"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Users
          </a>
          <a
            href="#gallery"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Gallery
          </a>
          <a
            href="#contactus"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Contact
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-x-4">
          {/* Clerk Auth */}
          <div>
            <SignedOut>
              <Link
                to="/signin"
                className="px-5 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Sign In
              </Link>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox:
                      "w-10 h-10 border border-gray-300 rounded-full",
                  },
                }}
                afterSignOutUrl="/"
              />
            </SignedIn>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 dark:border-gray-500 hover:scale-105 transition"
          >
            {theme === "dark" ? (
              <FaSun className="w-5 h-5 text-yellow-400" />
            ) : (
              <FaMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
