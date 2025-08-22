import React, { useRef, useState } from "react";

const PostCard = ({ post }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <div
      className="relative overflow-hidden max-w-lg m-2 sm:-4 rounded-xl border 
        border-gray-200 dark:border-gray-700 shadow-xl shadow-gray-100 
        dark:shadow-white/10 transition-all h-full"
      onMouseLeave={() => setVisible(false)}
      onMouseEnter={() => setVisible(true)}
      ref={divRef}
      onMouseMove={handleMouseMove}
    >
      {/* 🔹 Glow Effect BEHIND card */}
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r 
          from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[250px] 
          absolute transition-opacity duration-500 mix-blend-screen 
          ${visible ? "opacity-70" : "opacity-0"}`}
        style={{
          top: position.y - 150,
          left: position.x - 150,
        }}
      />

      {/* 🔹 Card Content */}
      <div
        className="relative z-10 flex flex-col justify-between h-full gap-6 p-6 rounded-[10px] 
          bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm transition-all hover:p-5 hover:m-0.5"
      >
        <div>
          <h2 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
            {post.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 line-clamp-4">
            {post.body}
          </p>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          User ID: {post.userId}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
