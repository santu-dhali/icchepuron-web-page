import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from 'react-icons/fa';
import Button from "./Button";
import logo from "../image/logo.png";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(null); // 'about', 'works', 'contact'
    const [timers, setTimers] = useState({});

    const handleMouseEnter = useCallback((menu) => {
        if (timers[menu]) {
            clearTimeout(timers[menu]);
            setTimers(prev => ({ ...prev, [menu]: null }));
        }
        setOpenMenu(menu);
    }, [timers]);

    const handleMouseLeave = useCallback((menu) => {
        const newTimer = setTimeout(() => {
            setOpenMenu(null);
        }, 2000);
        setTimers(prev => ({ ...prev, [menu]: newTimer }));
    }, []);

    const handleMouseEnterOther = useCallback(() => {
        Object.values(timers).forEach(timer => {
            if (timer) clearTimeout(timer);
        });
        setTimers({});
        setOpenMenu(null);
    }, [timers]);

    const handleClickOutside = useCallback((event) => {
        if (!event.target.closest(".nav-items")) {
            handleMouseEnterOther();
        }
    }, [handleMouseEnterOther]);

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
            Object.values(timers).forEach(timer => {
                if (timer) clearTimeout(timer);
            });
        };
    }, [handleClickOutside, timers]);

    return (
        <div className="flex justify-between items-center border-b border-gray-300">
            <div className="logo-container flex mt-8 ml-4">
                <img className="logo w-[62px] ml-5 my-[6px]" src={logo} alt="Logo.." />
                <span className="ml-3 mt-6 font-bold text-xl">IcchePuron</span>
            </div>
            <div className="nav-items mr-6">
                <ul className="flex space-x-4">
                    <li onMouseEnter={handleMouseEnterOther} className="mt-4 hover:text-teal-500">
                        <Link to="/">Home</Link>
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('about')}
                        onMouseLeave={() => handleMouseLeave('about')}
                        className="relative mt-4 hover:text-teal-500"
                    >
                        <div className="flex items-center cursor-pointer">
                            <span>About Us</span>
                            <FaChevronDown className="ml-1 mt-[0.25rem]" />
                        </div>
                        {openMenu === 'about' && (
                            <ul
                                className="absolute top-full left-0 mt-1 w-40 shadow-lg border rounded"
                                style={{ backgroundColor: '#F5F5DC' }}
                            >
                                <li className="p-2 hover:bg-gray-100">
                                    <Link to="/our-story" className="text-black hover:text-teal-500">Our Story</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-100">
                                    <Link to="/members" className="text-black hover:text-teal-500">Members</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-100">
                                    <Link to="/impact" className="text-black hover:text-teal-500">Impact</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('works')}
                        onMouseLeave={() => handleMouseLeave('works')}
                        className="relative mt-4 hover:text-teal-500"
                    >
                        <div className="flex items-center cursor-pointer">
                            <span>Our Works</span>
                            <FaChevronDown className="ml-1 mt-[0.25rem]" />
                        </div>
                        {openMenu === 'works' && (
                            <ul
                                className="absolute top-full left-0 mt-1 w-40 shadow-lg border rounded"
                                style={{ backgroundColor: '#F5F5DC' }}
                            >
                                <li className="p-2 hover:bg-gray-100">
                                    <Link to="/education" className="text-black hover:text-teal-500">Education</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-100">
                                    <Link to="/health" className="text-black hover:text-teal-500">Health</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-100">
                                    <Link to="/disaster" className="text-black hover:text-teal-500">Disaster Response</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-100">
                                    <Link to="/cultural" className="text-black hover:text-teal-500">Cultural Program</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-100">
                                    <Link to="/environment" className="text-black hover:text-teal-500">Environmental Works</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('contact')}
                        onMouseLeave={() => handleMouseLeave('contact')}
                        className="relative mt-4 hover:text-teal-500"
                    >
                        <div className="flex items-center cursor-pointer">
                            <span>Contact Us</span>
                            <FaChevronDown className="ml-1 mt-[0.25rem]" />
                        </div>
                        {openMenu === 'contact' && (
                            <ul
                                className="absolute top-full left-0 mt-1 w-40 shadow-lg border rounded"
                                style={{ backgroundColor: '#F5F5DC' }}
                            >
                                <li className="p-2 hover:bg-gray-100">
                                    <Link to="/contact-us" className="text-black hover:text-teal-500">Get In Touch</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-100">
                                    <Link to="/faq" className="text-black hover:text-teal-500">FAQ</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={handleMouseEnterOther}
                        className="relative mt-[0.70rem]"
                    >
                        <Button />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
