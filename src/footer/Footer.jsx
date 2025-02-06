import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTimes } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
      
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-lg mb-4 md:mb-0">
            “Stay Updated on the Latest in AI and Business Growth.”
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 bg-gray-700 text-white outline-none"
            />
            <button className="bg-red-600 text-white px-6 py-2">SUBSCRIBE</button>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">Growth Grid</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="flex space-x-6 text-gray-300 font-semibold">
            <a href="#" className="hover:text-white">Services</a>
            <a href="#" className="hover:text-white">Blog</a>
            <a href="#" className="hover:text-white">Case Studies</a>
            <a href="#" className="hover:text-white">Contact Us</a>
            <a href="#" className="hover:text-white">About Us</a>
          </div>

        
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaTimes className="text-gray-400 hover:text-white cursor-pointer" />
            <FaFacebookF className="text-blue-500 hover:text-white cursor-pointer" />
            <FaInstagram className="text-pink-500 hover:text-white cursor-pointer" />
            <FaLinkedinIn className="text-blue-700 hover:text-white cursor-pointer" />
            <FaYoutube className="text-red-600 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
