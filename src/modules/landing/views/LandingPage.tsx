// src/modules/landing/views/LandingPage.tsx
import React, { useEffect, useState } from 'react';
import { GetLandingSections } from '../usecases/GetLandingSections';
import { LandingSection } from '../entities/LandingSection';
import { HeroSection } from '../components/HeroSection';
import { GridSection } from '../components/GridSection';
import { CarouselSection } from '../components/CarouselSection';

export const LandingPage: React.FC = () => {
  const [sections, setSections] = useState<LandingSection[]>([]);

  useEffect(() => {
    GetLandingSections().then(setSections);
  }, []);

  return (
    <div>
      {sections.map((section, index) => {
        switch (section.type) {
          case 'hero':
            return <HeroSection key={index} {...section} />;
          case 'grid':
            return <GridSection key={index} {...section} />;
          case 'carousel':
            return <CarouselSection key={index} {...section} />;
          default:
            return null;
        }
      })}
    </div>
  );
};
