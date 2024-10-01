// src/modules/landing/components/HeroSection.tsx
import React from 'react';

interface Props {
  title: string;
  description: string;
  image: string;
}

export const HeroSection: React.FC<Props> = ({ title, description, image }) => {
  return (
    <section className="bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="bg-black bg-opacity-50 py-20 text-center text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-4 text-xl">{description}</p>
      </div>
    </section>
  );
};
