import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

const App = () => {
  return (
    <div className="min-h-screen w-full dark:bg-gray-800 transition-colors duration-300">
      <Navbar />
      <div className="max-w-lg mx-auto overflow-y-scroll max-h-[400px] mt-10 border rounded-md">
        <Post />
      </div>
    </div>
  );
};

export default App;
