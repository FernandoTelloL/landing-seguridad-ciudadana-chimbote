import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="">
      <div className='p-6 w-[80vw] mx-auto flex items-center'>
        <div className=''>
          <img src="./assets/images/logo.png" alt="logo" className="w-24" />
        </div>
        <h1 className="text-lg font-bold">Seguridad Ciudadana Chimbote</h1>
      </div>
      <div className='bg-red-personal-color h-20 text-text-primary-color '>
        <div className=' flex items-center justify-end w-[80vw] mx-auto p-6 h-[inherit]'>
          <nav className=" ">
            <ul className="flex space-x-4 items-center font-[600] font-poppins">
              <li><NavLink to="/" className='hover:text-[#c1282a] transition-all duration-300'>Inicio</NavLink></li>
              <li><NavLink to="/about" className='hover:text-[#c1282a] transition-all duration-300'>Sobre Nosotros</NavLink></li>
            </ul>
          </nav>

        </div>

      </div>
    </header>
  );
};

