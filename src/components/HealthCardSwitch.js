import React, { useState } from 'react';
import HealthCard from './HealthCard';
import { healthData } from '../utils/healthData';

const HealthCardSwitcher = () => {
  const [activeCard, setActiveCard] = useState('medicine');

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-start w-full max-w-4xl mb-8 p-4">
        <button
          className={`p-4 mr-4 text-left font-bold text-xl ${activeCard === 'medicine' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveCard('medicine')}
        >
          Medicine Provide
        </button>
        <button
          className={`p-4 mr-4 text-left font-bold text-xl ${activeCard === 'blood' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveCard('blood')}
        >
          Blood Donation
        </button>
        <button
          className={`p-4 text-left font-bold text-xl ${activeCard === 'awareness' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveCard('awareness')}
        >
          Health Awareness
        </button>
      </div>
      <div className="w-full">
        <HealthCard {...healthData[activeCard]} />
      </div>
    </div>
  );
};

export default HealthCardSwitcher;
