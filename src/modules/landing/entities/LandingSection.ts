// src/modules/landing/entities/LandingSection.ts
export interface LandingSection {
  id: number;
  title: string;
  description: string;
  type: 'hero' | 'grid' | 'carousel';  // Tipo de sección
  images?: string[];  // Opcional para secciones con imágenes
  videos?: { title: string; url: string }[];  // Opcional para secciones con videos
}
