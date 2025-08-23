// UserCard.jsx
import React from "react";

const UserCard = ({ userItems }) => {
  return (
    <div className="p-6 rounded-xl shadow-md border border-gray-200 bg-white dark:bg-gray-900 hover:scale-105 transition-all duration-500 cursor-pointer">
      <h2 className="font-bold text-lg text-blue-600">{userItems?.name}</h2>
      <p className="text-gray-600 dark:text-gray-300">@{userItems?.username}</p>
      <p className="text-sm text-gray-500">{userItems?.email}</p>

      <div className="mt-3 text-sm">
        <p>
          {userItems?.address?.street}, {userItems?.address?.suite}
        </p>
        <p>
          {userItems?.address?.city}, {userItems?.address?.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
