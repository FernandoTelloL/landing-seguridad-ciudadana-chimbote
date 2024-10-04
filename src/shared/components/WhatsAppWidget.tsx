import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppWidget: React.FC = () => {
  // Número de teléfono de WhatsApp con el que te comunicarás
  const whatsappNumber = "51987654321"; // Cambia esto por el número de WhatsApp deseado (incluyendo código de país).

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className=" z-50 fixed bottom-4 right-4 font-poppins bg-green-700 text-white text-sm flex items-center space-x-2 py-3 px-4 rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-105 duration-200"
      onClick={handleClick}
    >
      <FaWhatsapp className="w-6 h-6" />
      <span className="font-semibold">Comunícate con nosotros</span>
    </div>
  );
};

export default WhatsAppWidget;
