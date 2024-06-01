import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from "../image/logo.png";

const Footer = () => {
    return (
        <div>
            
            <div className="footer-container bg-gray-400 p-6">
                <div className="flex">
                    <div className="footer-logo w-[40%] flex flex-col pr-6">
                        <div className="flex">
                            <img src={logo} alt="logo.." className="w-[45px]" />
                            <span className="ml-2 mt-3 text-lg font-semibold">IcchePuron</span>
                        </div>
                        <div className="text-left mb-4 mt-4 ml-4">
                            <p>
                                <span className="font-bold">Address:</span> Besides Chowberia-II Panchayat Office, Nahata, North 24 Parganas, West Bengal -743290, India <br />
                            
                                <span className="font-bold">E-Mail:</span> <Link to="mailto:icchepuron.estd2k19@gmail.com" className="text-blue-500 hover:text-blue-700">icchepuron.estd2k19@gmail.com</Link> <br />
                            
                                <span className="font-bold">Contact No:</span> +91 7384364583, +91 8768871114, +91 8371946376
                            </p>
                        </div>
                    </div>
                    <div className="border-l border-gray-500"></div>
                    <div className="footer-links w-[60%] flex mt-8 justify-around pl-6">
                        <div>
                            <ul className="list-none">
                                <li className="font-bold">
                                    About Us
                                    <hr className="mt-1 mb-2 border-gray-300" />
                                </li>
                                <li className="ml-1">
                                    <Link to="/our-story" className="text-white hover:text-green-700">Our Story</Link>
                                </li>
                                <li className="ml-1">
                                    <Link to="/members" className="text-white hover:text-green-700">Members</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="list-none">
                                <li className="font-bold">
                                    Our Work
                                    <hr className="mt-1 mb-2 border-gray-300" />
                                </li>
                                <li className="ml-1">
                                    <Link to="/education" className="text-white hover:text-green-700">Education</Link>
                                </li>
                                <li className="ml-1">
                                    <Link to="/health" className="text-white hover:text-green-700">Health</Link>
                                </li>
                                <li className="ml-1">
                                    <Link to="/cultural" className="text-white hover:text-green-700">Cultural Program</Link>
                                </li>
                                <li className="ml-1">
                                    <Link to="/environment" className="text-white hover:text-green-700">Environmental Works</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="list-none">
                                <li className="font-bold">
                                    Follow Us
                                    <hr className="mt-1 mb-2 border-gray-300" />
                                </li>
                                <li className="ml-1 flex items-center space-x-4">
                                    <Link to="https://www.facebook.com" target="_blank" className="text-black hover:text-green-700">
                                        <FaFacebook size={24} />
                                    </Link>
                                    <Link to="https://www.instagram.com" target="_blank" className="text-black hover:text-green-700">
                                        <FaInstagram size={24} />
                                    </Link>
                                    <Link to="https://www.youtube.com" target="_blank" className="text-black hover:text-green-700">
                                        <FaYoutube size={24} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center bg-gray-500">
                <p className="text-white">
                    &copy; IcchePuron 2019 | <Link to="/privacy-policy" className="text-blue-500 hover:text-blue-700">Privacy Policy</Link> | All rights reserved
                </p>
            </div>
        </div>
    );
}

export default Footer;
