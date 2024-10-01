// src/modules/landing/usecases/GetLandingSections.ts
import { LandingRepository } from '../repositories/LandingRepository';
import { LandingSection } from '../entities/LandingSection';

export class GetLandingSections {
  private repository: LandingRepository;

  // El caso de uso recibe un repositorio (Inyección de Dependencias)
  constructor(repository: LandingRepository) {
    this.repository = repository;
  }

  // Método para obtener las secciones
  async execute(): Promise<LandingSection[]> {
    return await this.repository.getSections();
  }
}
