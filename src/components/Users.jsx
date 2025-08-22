// Users.jsx
import React, { useContext } from "react";
import UserCard from "./UserCard";
import { AppContext } from "../Context/Context";



const Users = () => {
  const { user } = useContext(AppContext);
  return (
    <div
      id="users"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
    >
      {user.map((userItems) => (
        <UserCard key={userItems.id} userItems={userItems} />
      ))}
    </div>
  );
};

export default Users;
