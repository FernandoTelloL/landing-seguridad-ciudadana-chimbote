// src/shared/components/Header.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <NavLink to="/" className="text-xl">Serenazgo</NavLink>
        <div>
          <NavLink to="/" className="mr-4">Home</NavLink>
        </div>
      </nav>
    </header>
  );
};
