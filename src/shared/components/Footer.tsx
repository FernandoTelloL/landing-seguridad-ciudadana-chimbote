import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-8 h-[350px]">
      <div className="h-full w-[80vw] mx-auto flex flex-col md:flex-row justify-between px-4">
        {/* Columna izquierda */}
        <div className="flex md:w-1/2 mb-8 md:mb-0">
          <div className="flex flex-col justify-center items-center">
            <img
              src="./assets/images/logo-footer.png"
              alt="Logo Serenazgo de Chimbote"
              className="h-24 w-auto mb-4"
            />
            <div className="ml-4 text-center">
              <h2 className="text-2xl font-bold">Serenazgo de Chimbote</h2>
              <p className="">Tu seguridad es nuestra prioridad</p>
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="md:w-1/2 flex flex-col md:flex-row justify-around mt-12">
          {/* Números de emergencia */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Números de Emergencia</h3>
            <ul>
              <li className="flex items-center mb-1">
                <FaPhoneAlt className="mr-2" />
                <span>323380 - Policía</span>
              </li>
              <li className="flex items-center mb-1">
                <FaPhoneAlt className="mr-2" />
                <span>635544- Serenazgo</span>
              </li>
              <li className="flex items-center mb-1">
                <FaPhoneAlt className="mr-2" />
                <span>341569 - Bomberos</span>
              </li>
            </ul>
          </div>

          {/* Documentos */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Documentos</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Políticas de Seguridad</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Protocolos de Emergencia</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Informes Anuales</a></li>
            </ul>
          </div>

          {/* Dirección de la central de monitoreo */}
          <div>
            <h3 className="text-lg font-bold mb-4">Central de Monitoreo</h3>
            <p className="mb-1">Av. Los Pinos 123, Chimbote</p>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Franja de seguridad ciudadana */}
      <div className=" bg-red-personal-color text-white text-center py-4">
        <p className="text-md font-semibold">SEGURIDAD CIUDADANA DE CHIMBOTE - TODOS LOS DERECHOS RESERVADOS -2024</p>
      </div>
    </footer>
  );
};

