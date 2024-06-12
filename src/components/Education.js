import React from 'react';
import EducationCard from './EducationCard';
import { educationData } from '../utils/educationData';

const Education = () => {
  return (
    <div className="p-6">
      <div className="w-full h-64 mb-6">
        <img 
          src="https://via.placeholder.com/1200x300"
          alt="Education"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <p className="text-lg">
          We provide comprehensive educational resources and programs to enhance learning opportunities. Our aim is to foster a love of learning and promote educational excellence.
        </p>
      </div>

      <div className="space-y-12">
        {educationData.map((data) => (
          <EducationCard
            key={data.id}
            photos={data.photos}
            title={data.title}
            description={data.description}
            align={data.id % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
