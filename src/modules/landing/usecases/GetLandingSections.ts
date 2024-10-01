// src/modules/landing/usecases/GetLandingSections.ts
import { ApiLandingAdapter } from '../adapters/ApiLandingAdapter';
import { LandingSection } from '../entities/LandingSection';

export const GetLandingSections = async (): Promise<LandingSection[]> => {
  return await ApiLandingAdapter.getSections();
};
