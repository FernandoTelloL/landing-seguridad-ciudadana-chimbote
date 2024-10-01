// src/modules/landing/adapters/ApiLandingSection.ts
// Creamos una interfaz que refleje la estructura de los datos que obtenemos desde la API simulada.
export interface ApiLandingSection {
  section_id: number;
  section_title: string;
  section_description: string;
  section_type: 'hero' | 'grid' | 'carousel';
  images?: string[];
  videos?: { title: string; url: string }[];
}
