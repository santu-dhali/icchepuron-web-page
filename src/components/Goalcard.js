import React from 'react';

const Goalcard = ({ goal }) => {
    return (
        <div className="flex items-center border p-6 rounded-lg shadow-lg bg-blue-100 my-4">
            <div className="flex items-center justify-center w-14 h-14 bg-white text-blue-800 rounded-full">
                {goal.logo}
            </div>
            <div className="border-l-2 border-blue-400 h-14 mx-6"></div>
            <div className="text-left">
                <p className="text-blue-900 font-semibold">{goal.context}</p>
            </div>
        </div>
    );
};

export default Goalcard;
