import { Link } from "react-router-dom";
import programData from "../utils/ourProgramData";
import Program from "./Program";

const Body = () => {
    return (
        <div>
            <div className="p-1">
                <img 
                    src="https://cdn.downtoearth.org.in/library/large/2022-02-25/0.25794500_1645773147_istock-870402320.jpg" 
                    alt="Pic.." 
                    className="w-[100%] h-[400px] object-cover"
                />
            </div>
            <div className="px-8 py-2 text-center mt-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a purus mollis, commodo augue ac, aliquet elit. Ut aliquam felis a est hendrerit fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum tincidunt lacus a.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus neque in est fringilla, a lobortis mauris rhoncus. Etiam rhoncus velit a augue volutpat, nec dictum mi vulputate. Maecenas commodo urna ex, sit amet bibendum nisl iaculis in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.</p>
                <Link to="/our-story" className="font-semibold text-green-600 hover:text-teal-700">Know More About Us -{'>'}</Link>
            </div>
            <div className="text-center my-4">
                <h1 className="text-2xl font-bold mb-2">Our Programs</h1>
                <div className="flex flex-wrap justify-center gap-10 my-8">
                    {programData.map((data) => (
                        <div key={data.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-2">
                            <Program pdata={data} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center my-4">
                <h2 className="text-xl font-bold mb-2">Goal</h2>
                <p>Our goal is to make a significant impact on society through various initiatives and programs.</p>
            </div>
            <div className="text-center my-4">
                <h2 className="text-xl font-bold mb-2">Award</h2>
                <p>We are honored to have received numerous awards for our work in different sectors.</p>
            </div>
        </div>
    );
}

export default Body;
