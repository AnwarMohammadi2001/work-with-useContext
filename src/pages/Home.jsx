import React from "react";
import Post from '../components/Post'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto  mt-10   border-gray-200">
      <div>
        <h1 className="text-center text-2xl font-bold py-2 dark:text-white">
          All Post
        </h1>
      </div>
      <Post />
    </div>
  );
};

export default Home;
