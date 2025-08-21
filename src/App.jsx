import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

const App = () => {
  return (
    <div className="min-h-screen w-full dark:bg-gray-800 transition-colors duration-300">
      <Navbar />
      <div className="max-w-7xl mx-auto overflow-y-scroll max-h-[500px] mt-10 border  border-gray-200">
        <Post />
      </div>
    </div>
  );
};

export default App;
