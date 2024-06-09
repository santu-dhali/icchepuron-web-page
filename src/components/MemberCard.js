import React from 'react';

const MemberCard = ({ photo, name, role, dob, address }) => {
  return (
    <div className="member-card relative flex flex-col items-center shadow-lg rounded-lg m-4 w-72 h-96 border-2 border-gray-200 bg-white">
      {/* Top Section with Pink Background */}
      <div className="w-full h-[30%] bg-pink-400 rounded-t-lg relative flex items-center justify-center">
        <div className="absolute top-2 left-2 text-white font-bold">
          Icchepuron
        </div>
        <div className="absolute top-2 right-2 text-white font-bold">
          Reg No:
        </div>
        <div className="photo w-24 h-24 bg-white border-4 border-white rounded-full absolute -bottom-12">
          <img src={photo} alt={`${name}'s photo`} className="w-full h-full object-cover rounded-full" />
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="flex-grow w-full bg-teal-700 text-white rounded-b-lg text-center pt-14">
        <h2 className="text-2xl font-bold">{name}</h2>
        <div className="w-[60%] border-b-2 ml-14 border-gray-300 my-1"></div>
        <p className="text-gray-200">{role}</p>
        <div className="mt-4 text-left w-full px-6">
          <p className="text-sm text-gray-100 mt-6 mb-2"><strong>DOB:</strong> {dob}</p>
          <p className="text-sm text-gray-100"><strong>Address:</strong> {address}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
