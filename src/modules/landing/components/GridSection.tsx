// src/modules/landing/components/GridSection.tsx
import React from 'react';

interface Props {
  title: string;
  images: string[];
}

export const GridSection: React.FC<Props> = ({ title, images }) => {
  return (
    <section className="py-12">
      <h2 className="text-3xl text-center mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Imagen ${index + 1}`} className="rounded-lg" />
        ))}
      </div>
    </section>
  );
};
