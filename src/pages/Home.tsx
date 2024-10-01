// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { LandingSection } from '../modules/landing/entities/LandingSection';
import { InMemoryLandingRepository } from '../modules/landing/infrastructure/InMemoryLandingRepository';
import { GetLandingSections } from '../modules/landing/usecases/GetLandingSections';
import Header from '../shared/components/Header';

const Home = () => {
  const [sections, setSections] = useState<LandingSection[]>([]);

  useEffect(() => {
    const repository = new InMemoryLandingRepository();
    const getLandingSections = new GetLandingSections(repository);

    getLandingSections.execute().then(setSections);
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        {sections.map(section => (
          <div key={section.id} className="my-4">
            <h2 className="text-2xl">{section.title}</h2>
            <p>{section.description}</p>
            {/* Aquí puedes añadir lógica para mostrar imágenes o videos según el tipo de sección */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
