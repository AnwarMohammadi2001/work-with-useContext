import React, { useContext } from "react";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { AppContext } from "../Context/Context";

const Navbar = () => {
  const { theme, setTheme } = useContext(AppContext);

  return (
    <div className="w-full px-20 py-3 flex justify-between border-b border-gray-300 items-center">
      <div className="text-xl font-bold">Test</div>
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
  );
};

export default Navbar;
