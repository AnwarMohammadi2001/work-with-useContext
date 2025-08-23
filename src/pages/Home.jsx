import React from "react";
import Post from "../components/Post";
import Users from "../components/Users";
import Gallary from "../components/Gallary";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto   border-gray-200">
      <Post />
      <Users />
      <Gallary />
      <ContactUs />
    </div>
  );
};

export default Home;
