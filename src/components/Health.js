import React from 'react';
import HealthCardSwitcher from './HealthCardSwitch';

const Health = () => {
  return (
    <div>
      <div className="w-full h-64 p-2">
        <img
          src="https://via.placeholder.com/1200x300"
          alt="Health Initiatives"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">What We Have Done Till Now</h2>
        <p className="text-gray-700">
          We have provided extensive healthcare support including medicine provision,
          blood donation camps, and health awareness programs. Our efforts are aimed
          at improving community health and well-being.
        </p>
      </div>

      <HealthCardSwitcher/>
    </div>
  );
};

export default Health;
