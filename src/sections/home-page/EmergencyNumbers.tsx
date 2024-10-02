import React from 'react';
import { FaPhoneAlt, FaFireExtinguisher, FaAmbulance, FaShieldAlt, FaHospitalAlt, FaUsers, FaPhoneSquareAlt } from 'react-icons/fa'; // Importamos los iconos

// Los datos que se utilizarán para las cards
const emergencyNumbers = [

  {
    icon: <FaShieldAlt />,
    number: '635544',
    name: 'Base Serenazgo'
  },
  {
    icon: <FaPhoneAlt />,
    number: '323380',
    name: 'Policía Chimbote'
  },
  {
    icon: <FaFireExtinguisher />,
    number: '341569',
    name: 'Bomberos Chimbote'
  },
  {
    icon: <FaAmbulance />,
    number: '106',
    name: 'Hospital La Caleta'
  },
  {
    icon: <FaHospitalAlt />,
    number: '107',
    name: 'Cruz Roja'
  },
  {
    icon: <FaUsers />,
    number: '104',
    name: 'Defensa Civil'
  }
];

export const EmergencyNumbers: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className='w-[80vw] mx-auto'>
        {/* Título centrado */}
        <h2 className="text-[40px] font-bold text-center mb-12">Números de Emergencia</h2>

        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Columna Izquierda */}
          <div className="relative w-full lg:w-1/2">
            <img
              src="./assets/images/img9.jpg" // Aquí puedes cambiar la imagen
              alt="Seguridad Ciudadana"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex flex-col hover:shadow-2xl transition-shadow duration-300 justify-center items-center text-center rounded-lg p-8">
              <div className='bg-alternative-bg-color rounded-lg  p-6 flex flex-col justify-center items-center  hover:shadow-2xl transition-shadow duration-300'>
                <FaPhoneSquareAlt className='text-text-alternative-color text-4xl self-start mb-2' />
                <h3 className="text-text-alternative-color text-xl font-bold mb-2">Central Serenazgo</h3>
                <p className="font-poppins text-text-alternative-color font-bold  text-md">914 782 543</p>
                <p className="font-poppins text-text-alternative-color font-bold  text-md mb-4">914 782 677</p>
                <p className="font-poppins text-text-alternative-color font-[600] text-md mb-4">Base Central</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Grid de Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyNumbers.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="text-4xl text-red-personal-color mb-4">{item.icon}</div>
                <p className="text-2xl font-bold text-text-alternative-color">{item.number}</p>
                <hr className="w-full my-4 border-gray-300" />
                <p className="text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

