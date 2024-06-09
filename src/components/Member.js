import React from 'react';
import MemberCard from './MemberCard';
import { memberData } from '../utils/memberData';

const Member = () => {
  return (
    <div className="p-6"> {/* Add padding to the entire container */}
      {/* Text section with margins */}
      <div className="mx-4 my-6 text-justify"> {/* Add horizontal (x) and vertical (y) margins */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a purus mollis, commodo augue ac, aliquet elit. Ut aliquam felis a est hendrerit fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum tincidunt lacus a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus neque in est fringilla, a lobortis mauris rhoncus. Etiam rhoncus velit a augue volutpat, nec dictum mi vulputate. Maecenas commodo urna ex, sit amet bibendum nisl iaculis in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.
      </div>

      {/* Members Section Title */}
      <div className="text-center font-bold text-2xl mt-8 mb-4">
        Our Members
      </div>

      {/* Member Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {memberData.map((member) => (
          <MemberCard
            key={member.id}
            photo={member.photo}
            name={member.name}
            role={member.role}
            dob={member.dob}
            address={member.address}
          />
        ))}
      </div>
    </div>
  );
};

export default Member;
