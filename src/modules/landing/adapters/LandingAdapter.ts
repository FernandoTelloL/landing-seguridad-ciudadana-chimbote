// src/modules/landing/adapters/LandingAdapter.ts
import { LandingRepository } from '../repositories/LandingRepository';
import { InMemoryLandingRepository } from '../infrastructure/InMemoryLandingRepository';
import { LandingSection } from '../entities/LandingSection';

export class LandingAdapter {
  private repository: LandingRepository;

  constructor() {
    this.repository = new InMemoryLandingRepository();
  }

  async getSections(): Promise<LandingSection[]> {
    return await this.repository.getSections();
  }
}
