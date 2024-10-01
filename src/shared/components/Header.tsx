// src/shared/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/about" className="text-white">About</Link></li>
          <li><Link to="/contact" className="text-white">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
