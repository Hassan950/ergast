import api from '../../api/axios';
import { PaginationParams } from '../../types/api';
import { GetSeasonsResponse } from './types';

export const fetchSeasons = async (params: PaginationParams) => {
  const response = await api.get<GetSeasonsResponse>('/seasons.json', {
    params,
  });
  return response;
};
