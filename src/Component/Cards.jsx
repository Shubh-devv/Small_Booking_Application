import React from 'react';

const Card = ({ title, description, image, onClick }) => {
  return (
    <div 
      className="max-w-sm bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h2 className="text-white font-bold text-2xl drop-shadow-lg hover:scale-105">{title}</h2>
        </div>
      </div>
      <div className="p-6">
        <p className="text-white text-base mb-4 hover:scale-105">{description}</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs font-semibold text-white">#tag1</span>
          <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs font-semibold text-white">#tag2</span>
          <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs font-semibold text-white">#tag3</span>
        </div>
      </div>
    </div>
  );
};

export default Card;