import React, { useContext, useState } from "react";
import { AppContext } from "../Context/Context";

const Post = () => {
  const { data } = useContext(AppContext);
  const [visiable, setVisiable] = useState(5);

  const handleVisiable = () => {
    setVisiable((prev) => prev + 5);
  };

  const handleShowLess = () => {
    setVisiable((prev) => Math.max(prev - 5, 0));
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <div className="grid gap-6 max-w-4xl mx-auto">
        {data && data.length > 0 ? (
          data.slice(0, visiable).map((post) => (
            <div
              key={post.id}
              className="border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-sm 
              hover:shadow-xl transition-shadow bg-white dark:bg-gray-800"
            >
              <h2 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
                {post.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {post.body}
              </p>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                User ID: {post.userId}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300">
            Loading posts...
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-x-6 mt-8">
        {visiable < data.length && (
          <button
            onClick={handleVisiable}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-blue-600 
            py-2 px-6 text-white font-medium rounded-full shadow-md transition"
          >
            Show More
          </button>
        )}

        <div className="text-gray-700 dark:text-gray-300 font-medium">
          {Math.min(visiable, data.length)} / {data.length}
        </div>

        {visiable > 5 && (
          <button
            onClick={handleShowLess}
            className="bg-gradient-to-r from-gray-700 to-black hover:from-black hover:to-gray-800 
            py-2 px-6 text-white font-medium rounded-full shadow-md transition"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Post;
