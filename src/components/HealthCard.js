import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HealthCard = ({ photos, title, details }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden m-4 w-full h-auto max-w-screen-lg">
      {/* Photo Section with reduced size */}
      <div className="relative w-[45%] h-full p-4">
        <img src={photos[currentIndex]} alt={title} className="w-full h-full object-cover rounded-none" />
        {photos.length > 1 && (
          <>
            <button
              onClick={handlePrevClick}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-3xl p-3 bg-black bg-opacity-50 rounded-full"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNextClick}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-3xl p-3 bg-black bg-opacity-50 rounded-full"
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>
      {/* Text Section */}
      <div className="p-8 w-[55%] flex flex-col justify-center">
        <h3 className="text-4xl font-bold mb-4">{title}</h3>
        <p className="text-lg text-gray-700">{details}</p>
      </div>
    </div>
  );
};

export default HealthCard;
