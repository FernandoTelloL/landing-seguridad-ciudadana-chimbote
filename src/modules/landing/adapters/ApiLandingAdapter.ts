// src/modules/landing/adapters/ApiLandingAdapter.ts
import axios from 'axios';

export const ApiLandingAdapter = {
  getSections: async () => {
    const response = await axios.get('/landingData.json');
    return response.data.sections;
  },
};
