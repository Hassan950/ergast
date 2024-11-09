import api from '../../api/axios';
import { GetRacesResponse } from './types';

export const fetchRacesForSeason = async (
  seasonId: string,
  params: PaginationParams,
) => {
  try {
    const response = await api.get<GetRacesResponse>(
      `/${seasonId}/races.json`,
      {
        params,
      },
    );
    return response;
  } catch (error) {
    throw error;
  }
};
