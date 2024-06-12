import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const EducationCard = ({ photos, title, description, align }) => {
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
    <div className={`flex ${align === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center bg-white shadow-lg rounded-lg overflow-hidden m-4`}>
      <div className="w-1/3 relative">
        <img src={photos[currentIndex]} alt={title} className="w-full h-full object-cover rounded-none" />
        {photos.length > 1 && (
          <>
            <button
              onClick={handlePrevClick}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl p-2 bg-black bg-opacity-50 rounded-full"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNextClick}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl p-2 bg-black bg-opacity-50 rounded-full"
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>
      <div className="p-6 w-2/3">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default EducationCard;
