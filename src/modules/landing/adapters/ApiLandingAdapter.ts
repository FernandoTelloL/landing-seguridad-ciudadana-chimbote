// usamos la interfaz ApiLandingSection para tipar los datos recibidos y transformados en el adaptador.
// src/modules/landing/adapters/ApiLandingAdapter.ts
import { LandingSection } from '../entities/LandingSection';
import { ApiLandingSection } from './ApiLandingSection';

export class ApiLandingAdapter {
  // Transforma los datos de la API en la entidad 'LandingSection'
  static fromApi(apiData: ApiLandingSection): LandingSection {
    return {
      id: apiData.section_id,
      title: apiData.section_title,
      description: apiData.section_description,
      type: apiData.section_type,
      images: apiData.images || [],
      videos: apiData.videos || [],
    };
  }

  // Transforma la entidad 'LandingSection' en el formato esperado por la API
  static toApi(section: LandingSection): ApiLandingSection {
    return {
      section_id: section.id,  // Ahora accedemos a la propiedad id sin omitirla
      section_title: section.title,
      section_description: section.description,
      section_type: section.type,
      images: section.images,
      videos: section.videos,
    };
  }
}
