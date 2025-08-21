import React, { useContext } from "react";
import { FaSun, FaUser } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { AppContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { theme, setTheme } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="w-full px-20 py-3 flex justify-between border-b border-gray-300 items-center">
      <div className="text-xl font-bold">Test</div>
      <div className="flex items-center gap-x-5">
        <span
          onClick={() => navigate("signin")}
          className="p-2 rounded-full border border-gray-300"
        >
          <FaUser className="text-md" />
        </span>
        <button className="flex items-center justify-center cursor-pointer">
          {theme === "dark" ? (
            <FaSun
              onClick={() => setTheme("light")}
              className="w-8 h-8 p-1.5 border border-gray-500 rounded-full"
            />
          ) : (
            <FaMoon
              onClick={() => setTheme("dark")}
              className="w-8 h-8 p-1.5 border border-gray-500 rounded-full"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
