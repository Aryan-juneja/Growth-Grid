import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Growth Grid</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-500">Services ▾</a>
          <a href="#" className="hover:text-gray-500">About us ▾</a>
          <a href="#" className="hover:text-gray-500">Careers ▾</a>
        </div>
        <button className="md:hidden text-2xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
