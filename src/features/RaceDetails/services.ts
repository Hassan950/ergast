import api from '../../api/axios';
import { GetRaceDetailsResponse } from './types';

export const fetchRaceDetails = async (seasonId: string, round: string) => {
  try {
    const response = await api.get<GetRaceDetailsResponse>(
      `/${seasonId}/${round}/results.json`,
    );
    return response.data;
  } catch (error) {
    console.error('Failed to fetch race details:', error);
    throw error;
  }
};
