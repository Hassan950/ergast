import { jest } from '@jest/globals';
import api from '../../../api/axios';
import { fetchSeasons } from './../services';
import { GetSeasonsResponse } from './../types';

jest.mock('../../../api/axios');
describe('fetchSeasons', () => {
  const params = { limit: 10, offset: 0 };

  const mockResponse: GetSeasonsResponse = {
    MRData: {
      xmlns: 'http://ergast.com/mrd/1.4',
      series: 'f1',
      limit: '10',
      offset: '0',
      total: '1',
      SeasonTable: {
        constructorId: 'someConstructorId',
        driverId: 'someDriverId',
        Seasons: [
          {
            season: '2021',
            url: 'http://example.com/2021',
          },
        ],
      },
    },
  };

  it('should return seasons on successful API call', async () => {
    (api.get as jest.MockedFunction<typeof api.get>).mockResolvedValue({
      data: mockResponse,
    });

    const result = await fetchSeasons(params);

    expect(result.data).toEqual(mockResponse);
    expect(api.get).toHaveBeenCalledWith('/seasons.json', { params });
  });

  it('should throw an error on failed API call', async () => {
    const mockError = new Error('Network Error');
    (api.get as jest.MockedFunction<typeof api.get>).mockRejectedValue(
      mockError,
    );

    await expect(fetchSeasons(params)).rejects.toThrow('Network Error');
    expect(api.get).toHaveBeenCalledWith('/seasons.json', { params });
  });

  it('should handle empty response gracefully', async () => {
    const emptyResponse: GetSeasonsResponse = {
      MRData: {
        xmlns: 'http://ergast.com/mrd/1.4',
        series: 'f1',
        limit: '10',
        offset: '0',
        total: '0',
        SeasonTable: {
          constructorId: 'someConstructorId',
          driverId: 'someDriverId',
          Seasons: [],
        },
      },
    };

    (api.get as jest.MockedFunction<typeof api.get>).mockResolvedValue({
      data: emptyResponse,
    });

    const result = await fetchSeasons(params);

    expect(result.data).toEqual(emptyResponse);
    expect(api.get).toHaveBeenCalledWith('/seasons.json', { params });
  });

  it('should handle partial response gracefully', async () => {
    const partialResponse: GetSeasonsResponse = {
      MRData: {
        xmlns: 'http://ergast.com/mrd/1.4',
        series: 'f1',
        limit: '10',
        offset: '0',
        total: '1',
        SeasonTable: {
          constructorId: 'someConstructorId',
          driverId: 'someDriverId',
          Seasons: [
            {
              season: '2021',
              url: 'http://example.com/2021',
            },
          ],
        },
      },
    };

    (api.get as jest.MockedFunction<typeof api.get>).mockResolvedValue({
      data: partialResponse,
    });

    const result = await fetchSeasons(params);

    expect(result.data).toEqual(partialResponse);
    expect(api.get).toHaveBeenCalledWith('/seasons.json', { params });
  });
});
