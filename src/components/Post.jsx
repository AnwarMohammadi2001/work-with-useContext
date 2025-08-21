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
    <div className="p-4 grid gap-4">
      {data && data.length > 0 ? (
        data.slice(0, visiable).map((post) => (
          <div
            key={post.id}
            className="border border-gray-300 p-4 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="font-bold text-lg mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
            <p className="mt-2 text-sm text-gray-500">User ID: {post.userId}</p>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
      <div className="flex items-center justify-center gap-x-5">
        {visiable < data.length && (
          <button
            onClick={handleVisiable}
            className="bg-blue-500 py-2 px-5 text-white rounded-md cursor-pointer"
          >
            Show More
          </button>
        )}
        <div className="text-gray-700">
           {Math.min(visiable, data.length)} / {data.length} 
        </div>

        {visiable > 5 && (
          <button
            onClick={handleShowLess}
            className="bg-black py-2 px-5 text-white rounded-md cursor-pointer"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Post;
