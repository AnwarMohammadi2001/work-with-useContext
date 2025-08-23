import React, { use, useContext } from "react";
import { AppContext } from "../Context/Context";
import GallaryCard from "./GallaryCard";

const Gallary = () => {
  const { gallery } = useContext(AppContext);
  return (
    <div id="gallery" className="min-h-screen p-5">
      <div className="grid grid-cols-4 gap-5">
        {gallery.slice(0 ,20).map((data, index) => (
          <GallaryCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Gallary;
