import { Link } from "react-router-dom";
import programData from "../utils/ourProgramData";
import Program from "./Program";
import GoalcardData from "../utils/GoalcardData";
import Goalcard from "./Goalcard";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Body = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleData = GoalcardData.slice(startIndex, startIndex + 3);

    const handleNext = () => {
        if (startIndex + 3 < GoalcardData.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div>
            <div className="p-1">
                <img 
                    src="https://cdn.downtoearth.org.in/library/large/2022-02-25/0.25794500_1645773147_istock-870402320.jpg" 
                    alt="Pic.." 
                    className="w-full h-[400px] object-cover"
                />
            </div>
            <div className="px-8 py-2 text-center mt-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a purus mollis, commodo augue ac, aliquet elit. Ut aliquam felis a est hendrerit fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum tincidunt lacus a.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus neque in est fringilla, a lobortis mauris rhoncus. Etiam rhoncus velit a augue volutpat, nec dictum mi vulputate. Maecenas commodo urna ex, sit amet bibendum nisl iaculis in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.</p>
                <Link to="/our-story" className="font-semibold text-green-600 hover:text-teal-700">Know More About Us -{'>'}</Link>
            </div>
            <div className="text-center my-4">
                <h1 className="text-2xl font-bold mb-2">Our Programs</h1>
                <div className="flex flex-wrap justify-center gap-10 my-8">
                    {programData.map((data) => (
                        <div key={data.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-2">
                            <Link to={`/${data.path}`}>
                                <Program pdata={data} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center my-4">
                <h2 className="text-2xl font-bold mb-2">Goal</h2>
                <p className="mb-6">Our goal is to make a significant impact on society through various initiatives and programs.</p>
                <div className="flex justify-center items-center gap-4 px-4 relative">
                    <button 
                        onClick={handlePrev} 
                        disabled={startIndex === 0} 
                        className={`p-3 ml-8 bg-gray-200 rounded-full absolute left-2 top-1/2 transform -translate-y-1/2 ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <FaChevronLeft size={24} />
                    </button>
                    <div className="flex overflow-hidden space-x-4 w-[80%] mx-auto">
                        {visibleData.map((goal) => (
                            <div key={goal.id} className="w-full sm:w-1/2 md:w-1/3 p-2">
                                <Goalcard goal={goal} />
                            </div>
                        ))}
                    </div>
                    <button 
                        onClick={handleNext} 
                        disabled={startIndex + 3 >= GoalcardData.length} 
                        className={`p-3 mr-8 bg-gray-200 rounded-full absolute right-2 top-1/2 transform -translate-y-1/2 ${startIndex + 3 >= GoalcardData.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <FaChevronRight size={24} />
                    </button>
                </div>
            </div>
            <div className="text-center my-4">
                <h2 className="text-xl font-bold mb-2">Award</h2>
                <p>We are honored to have received numerous awards for our work in different sectors.</p>
            </div>
        </div>
    );
}

export default Body;
