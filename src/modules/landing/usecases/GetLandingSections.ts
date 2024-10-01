// src/modules/landing/usecases/GetLandingSections.ts
import { LandingAdapter } from '../adapters/LandingAdapter';
import { LandingSection } from '../entities/LandingSection';

export const GetLandingSections = async (): Promise<LandingSection[]> => {
  const landingAdapter = new LandingAdapter();
  return await landingAdapter.getSections();
};
