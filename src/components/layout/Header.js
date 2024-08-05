import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="hidden md:flex space-x-4 ml-auto">
          <a href="/" className="hover:text-[#FF6464] hover:font-bold">Home</a>
          <a href="/Works" className="hover:text-[#FF6464] hover:font-bold">Works</a>
          <a href="/Blog" className="hover:text-[#FF6464] hover:font-bold">Blog</a>
          <a href="/Contact" className="hover:text-[#FF6464] hover:font-bold">Contact</a>
        </nav>
        <button
          className="md:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center p-4">
          <a href="/" className="block py-2">Works</a>
          <a href="/about" className="block py-2">Blog</a>
          <a href="/contact" className="block py-2">Contact</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
