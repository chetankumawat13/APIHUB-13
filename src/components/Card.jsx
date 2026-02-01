import React from "react";

const Card = ({ id, img, title, category, description, handleNavigate }) => {
  return (
    <div
      className="w-full max-w-sm bg-white rounded-2xl shadow-lg h-[45vh] overflow-hidden border border-gray-200 cursor-pointer hover:scale-105 transition-all ease-linear"
      onClick={() => handleNavigate(id)}
    >
      <img src={img} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-0.5">
          {title}
        </h2>
        <h2 className="text-sm font-semibold text-gray-800 mb-4">
          {category}
        </h2>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;

