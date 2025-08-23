import React from "react";

const GallaryCard = ({ data }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800">
      {/* Image */}
      <img
        src={data.url}
        alt={data.title}
        className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
      />

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2">
          {data.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Album ID: {data.albumId}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Photo ID: {data.id}
        </p>
      </div>

      {/* Thumbnail & Button */}
      <div className="flex items-center justify-between px-4 pb-4">
        <img
          src={data.thumbnailUrl}
          alt="Thumbnail"
          className="w-12 h-12 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
        />
        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors">
          View More
        </button>
      </div>
    </div>
  );
};

export default GallaryCard;
