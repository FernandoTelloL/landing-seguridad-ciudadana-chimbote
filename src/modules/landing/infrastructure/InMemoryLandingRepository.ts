// src/modules/landing/infrastructure/InMemoryLandingRepository.ts
import { LandingRepository } from '../repositories/LandingRepository';
import { LandingSection } from '../entities/LandingSection';
import { ApiLandingAdapter } from '../adapters/ApiLandingAdapter';
import axios from 'axios';

export class InMemoryLandingRepository implements LandingRepository {
  // Obtiene las secciones desde un archivo JSON
  async getSections(): Promise<LandingSection[]> {
    const response = await axios.get('/landingData.json');
    return response.data.sections.map(ApiLandingAdapter.fromApi);
  }
}
