// src/modules/landing/infrastructure/InMemoryLandingRepository.ts
import axios from 'axios';
import { LandingRepository } from '../repositories/LandingRepository';
import { LandingSection } from '../entities/LandingSection';

export class InMemoryLandingRepository implements LandingRepository {
  async getSections(): Promise<LandingSection[]> {
    const response = await axios.get('/landingData.json');
    return response.data.sections;
  }
}
