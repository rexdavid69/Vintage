import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaGooglePlusG, FaSearch } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="text-white font-extrabold">
            <div className="container mx-auto flex items-center justify-end space-x-8 pb-6 p-4">
                {/* Logo / Home Link */}
                <a href="/" className="text-2xl font-bold">
                    VINTAGE RALLY
                </a>

                {/* Menu for Desktop */}
                <div className="hidden md:flex space-x-6 text-2xl">
                    <a href="/drivers" className="hover:text-gray-300">
                        DRIVERS
                    </a>
                    <a href="/about" className="hover:text-gray-300">
                        ABOUT US
                    </a>

                </div>

                {/* Social Icons and Search */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className=" text-white p-2 pl-10 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FaSearch className="absolute left-2 top-2 text-gray-400 w-5 h-5" />
                    </div>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook className="w-6 h-6 hover:text-gray-300" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter className="w-6 h-6 hover:text-gray-300" />
                    </a>
                    <a
                        href="https://plus.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGooglePlusG className="w-6 h-6 hover:text-gray-300" />
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                isOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16m-7 6h7"
                            }
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <a
                        href="/drivers"
                        className="block px-4 py-2 hover:bg-gray-600"
                    >
                        DRIVERS
                    </a>
                    <a
                        href="/about"
                        className="block px-4 py-2 hover:bg-gray-600"
                    >
                        About Us
                    </a>
                </div>
            )}

            {/* Social and Search in Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex items-center space-x-4 p-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook className="w-6 h-6 hover:text-gray-300" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter className="w-6 h-6 hover:text-gray-300" />
                    </a>
                    <a
                        href="https://plus.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGooglePlusG className="w-6 h-6 hover:text-gray-300" />
                    </a>
                    <button className="bg-gray-600 p-2 rounded hover:bg-gray-500">
                        <FaSearch className="w-6 h-6" />
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
