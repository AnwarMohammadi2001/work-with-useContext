import React, { useState, useContext } from "react";
import { AppContext } from "../Context/Context";
import PostCard from "./PostCard";

const Post = () => {
  const { data } = useContext(AppContext);
  const [visible, setVisible] = useState(6);

  const handleShowMore = () => {
    setVisible((prev) => prev + 6);
  };

  const handleShowLess = () => {
    setVisible((prev) => Math.max(prev - 6, 6)); // never go below 6
  };

  return (
    <div id="posts" className="p-6">
      {/* Grid of Posts */}
      <div className="">
        <h1 className="text-center text-2xl font-bold py-2 dark:text-white">
          All Post
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.slice(0, visible).map((post, index) => (
          <PostCard post={post} index={index} key={index} />
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {visible < data.length && (
          <button
            onClick={handleShowMore}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-blue-600 
              py-2 px-6 text-white font-medium rounded-full shadow-md transition"
          >
            Show More
          </button>
        )}

        {visible > 6 && (
          <button
            onClick={handleShowLess}
            className="bg-gradient-to-r from-gray-700 to-black hover:from-black hover:to-gray-800 
              py-2 px-6 text-white font-medium rounded-full shadow-md transition"
          >
            Show Less
          </button>
        )}
      </div>

      {/* Progress Indicator */}
      <div className="mt-4 text-center text-gray-700 dark:text-gray-300 font-medium">
        Showing {Math.min(visible, data.length)} / {data.length}
      </div>
    </div>
  );
};

export default Post;
