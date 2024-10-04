import React from 'react';
import { FaShieldAlt, FaHandsHelping, FaExclamationTriangle, FaPeopleArrows } from 'react-icons/fa';

interface BannerProps {
  backgroundImage: string;
  pngImage: string;
}

export const Banner: React.FC<BannerProps> = ({ backgroundImage, pngImage }) => {
  return (
    <section
      className="bg-cover bg-center py-10 my-10"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Fondo con imagen personalizada
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Columna Izquierda */}
        <div className="md:w-[55%] text-white mb-8 md:mb-0">
          <div className=" p-10 rounded-lg">
            <h1 className="text-5xl font-bold mb-4 text-red-personal-color">Serenazgo de Chimbote</h1>
            <p className="text-xl mb-6">Un cuerpo dedicado a velar por la seguridad y el orden en la ciudad, protegiendo a los ciudadanos y combatiendo la delincuencia.</p>
            <p className="text-xl italic font-semibold mb-8">"Protegiendo tu seguridad, cada día más cerca de ti."</p>

            {/* Sección de Principios */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-red-personal-color">PRINCIPIOS</h2>
              <ul className="flex">
                <div className='mr-4'>
                  <li className="flex items-center mb-6">
                    <FaShieldAlt className="text-4xl mr-3 text-red-personal-color" />
                    <div>
                      <p className="text-base">Proteger la integridad física y patrimonial de los ciudadanos.</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <FaHandsHelping className="text-4xl mr-3 text-red-personal-color" />
                    <div>
                      <p className="text-sm">Prevenir y combatir la delincuencia.</p>
                    </div>
                  </li>
                  <li className="flex items-center mt-4">
                    <FaPeopleArrows className="text-4xl mr-3 text-red-personal-color" />
                    <div>
                      <p className="text-sm">Mantener el orden público, la tranquilidad y la paz social.</p>
                    </div>
                  </li>
                </div>
                <div>
                  <li className="flex items-center mb-6">
                    <FaExclamationTriangle className="text-4xl mr-3 text-red-personal-color" />
                    <div>
                      <p className="text-sm">Preventivo y disuasivo en apoyo a la PNP.</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <FaPeopleArrows className="text-4xl mr-3 text-red-personal-color" />
                    <div>
                      <p className="text-sm">Como órgano de línea de apoyo a las diferentes áreas de la MPS.</p>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="md:w-[45%] flex justify-center">
          <img
            src={pngImage}
            alt="Imagen del Serenazgo de Chimbote"
            className="w-full h-auto max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};
