import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="flex w-[80vw] mx-auto my-2">
      <div className='w-[40%] flex items-center'>
        <div className=''>
          <img src="./assets/images/logo.png" alt="logo" className="w-24" />
        </div>
        <h1 className="text-lg font-bold">Seguridad Ciudadana Chimbote</h1>
      </div>

      <div className='w-[60%] flex text-text-primary-color '>

        <div className="flex items-center justify-end mx-auto w-full p-6 h-[inherit]">
          <nav>
            <ul className="flex space-x-4 items-center font-[600] font-poppins">
              <li>
                <NavLink
                  to="/"
                  className="relative group hover:text-red-personal-color transition-all duration-300"
                >
                  Inicio
                  <span className="absolute left-0 bottom-[-4px] block w-full h-[2px] bg-red-personal-color scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="relative group hover:text-red-personal-color transition-all duration-300"
                >
                  Sobre Nosotros
                  <span className="absolute left-0 bottom-[-4px] block w-full h-[2px] bg-red-personal-color scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
};

