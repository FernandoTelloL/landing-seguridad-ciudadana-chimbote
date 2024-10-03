import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Función para detectar el scroll
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Función para scroll al top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Añadir el evento de scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 left-8 p-3 rounded-full bg-red-500 text-white transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="h-6 w-6" />
    </button>
  );
};

