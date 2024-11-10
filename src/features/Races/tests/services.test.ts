import { jest } from '@jest/globals';
import api from '../../../api/axios';
import { fetchRacesForSeason } from './../services';
import { GetRacesResponse } from './../types';

jest.mock('../../../api/axios');

describe('fetchRacesForSeason', () => {
  const seasonId = '2021';
  const params = { limit: 10, offset: 0 };

  const mockResponse: GetRacesResponse = {
    MRData: {
      xmlns: 'http://ergast.com/mrd/1.4',
      series: 'f1',
      limit: '10',
      offset: '0',
      total: '1',
      RaceTable: {
        season: '2021',
        Races: [
          {
            season: '2021',
            round: '1',
            url: 'http://example.com/race',
            raceName: 'Australian Grand Prix',
            Circuit: {
              circuitId: 'albert_park',
              url: 'http://example.com/albert_park',
              circuitName: 'Albert Park Grand Prix Circuit',
              Location: {
                lat: '-37.8497',
                long: '144.968',
                locality: 'Melbourne',
                country: 'Australia',
              },
            },
            date: '2021-03-21',
            time: '05:10:00Z',
            FirstPractice: {
              date: '2021-03-19',
              time: '01:30:00Z',
            },
            SecondPractice: {
              date: '2021-03-19',
              time: '05:00:00Z',
            },
            ThirdPractice: {
              date: '2021-03-20',
              time: '03:00:00Z',
            },
            Qualifying: {
              date: '2021-03-20',
              time: '06:00:00Z',
            },
          },
        ],
      },
    },
  };

  it('should return races for the season on successful API call', async () => {
    (api.get as jest.MockedFunction<typeof api.get>).mockResolvedValue({
      data: mockResponse,
    });

    const result = await fetchRacesForSeason(seasonId, params);

    expect(result.data).toEqual(mockResponse);
    expect(api.get).toHaveBeenCalledWith(`/${seasonId}/races.json`, { params });
  });

  it('should throw an error on failed API call', async () => {
    const mockError = new Error('Network Error');
    (api.get as jest.MockedFunction<typeof api.get>).mockRejectedValue(
      mockError,
    );

    await expect(fetchRacesForSeason(seasonId, params)).rejects.toThrow(
      'Network Error',
    );
    expect(api.get).toHaveBeenCalledWith(`/${seasonId}/races.json`, { params });
  });

  it('should handle empty response gracefully', async () => {
    const emptyResponse: GetRacesResponse = {
      MRData: {
        xmlns: 'http://ergast.com/mrd/1.4',
        series: 'f1',
        limit: '10',
        offset: '0',
        total: '0',
        RaceTable: {
          season: '2021',
          Races: [],
        },
      },
    };

    (api.get as jest.MockedFunction<typeof api.get>).mockResolvedValue({
      data: emptyResponse,
    });

    const result = await fetchRacesForSeason(seasonId, params);

    expect(result.data).toEqual(emptyResponse);
    expect(api.get).toHaveBeenCalledWith(`/${seasonId}/races.json`, { params });
  });

  it('should handle partial response gracefully', async () => {
    const partialResponse: GetRacesResponse = {
      MRData: {
        xmlns: 'http://ergast.com/mrd/1.4',
        series: 'f1',
        limit: '10',
        offset: '0',
        total: '1',
        RaceTable: {
          season: '2021',
          Races: [
            {
              season: '2021',
              round: '1',
              url: 'http://example.com/race',
              raceName: 'Australian Grand Prix',
              Circuit: {
                circuitId: 'albert_park',
                url: 'http://example.com/albert_park',
                circuitName: 'Albert Park Grand Prix Circuit',
                Location: {
                  lat: '-37.8497',
                  long: '144.968',
                  locality: 'Melbourne',
                  country: 'Australia',
                },
              },
              date: '2021-03-21',
              time: '05:10:00Z',
              FirstPractice: {
                date: '2021-03-19',
                time: '01:30:00Z',
              },
              SecondPractice: {
                date: '2021-03-19',
                time: '05:00:00Z',
              },
              ThirdPractice: {
                date: '2021-03-20',
                time: '03:00:00Z',
              },
              Qualifying: {
                date: '2021-03-20',
                time: '06:00:00Z',
              },
            },
          ],
        },
      },
    };

    (api.get as jest.MockedFunction<typeof api.get>).mockResolvedValue({
      data: partialResponse,
    });

    const result = await fetchRacesForSeason(seasonId, params);

    expect(result.data).toEqual(partialResponse);
    expect(api.get).toHaveBeenCalledWith(`/${seasonId}/races.json`, { params });
  });
});
