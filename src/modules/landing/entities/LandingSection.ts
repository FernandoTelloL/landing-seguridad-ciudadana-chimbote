// src/modules/landing/entities/LandingSection.ts
export interface HeroSection {
  type: 'hero';
  title: string;
  description: string;
  image: string;
}

export interface GridSection {
  type: 'grid';
  title: string;
  images: string[];
}

export interface CarouselSection {
  type: 'carousel';
  title: string;
  videos: { title: string; url: string }[];
}

export type LandingSection = HeroSection | GridSection | CarouselSection;
