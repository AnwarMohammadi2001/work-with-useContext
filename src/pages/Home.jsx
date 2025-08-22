import React from "react";
import Post from "../components/Post";
import Users from "../components/Users";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto   border-gray-200">
      <Post />
      <Users />
    </div>
  );
};

export default Home;
