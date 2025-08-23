// Users.jsx
import React, { useContext, useState } from "react";
import UserCard from "./UserCard";
import { AppContext } from "../Context/Context";

const Users = () => {
  const { user } = useContext(AppContext);
  const [visible, setVisible] = useState(6);

  const handleShowMore = () => {
    setVisible((prev) => prev + 6);
  };

  const handleShowLess = () => {
    setVisible((prev) => Math.max(prev - 6, 6)); // never go below 6
  };
  return (
    <div>
      <div
        id="users"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
      >
        {user.slice(0, visible).map((userItems) => (
          <UserCard key={userItems.id} userItems={userItems} />
        ))}
      </div>
      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {visible < user.length && (
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
        Showing {Math.min(visible, user.length)} / {user.length}
      </div>
    </div>
  );
};

export default Users;
