// src/modules/landing/repositories/LandingRepository.ts
import { LandingSection } from '../entities/LandingSection';

export interface LandingRepository {
  getSections(): Promise<LandingSection[]>;
}
