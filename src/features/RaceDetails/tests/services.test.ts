import { jest } from '@jest/globals';
import { fetchRaceDetails } from './../services';
import { GetRaceDetailsResponse } from './../types';
import api from '../../../api/axios';

jest.mock('../../../api/axios');

describe('fetchRaceDetails', () => {
  const seasonId = '2021';
  const round = '1';

  const mockResponse: GetRaceDetailsResponse = {
    MRData: {
      xmlns: 'http://ergast.com/mrd/1.4',
      series: 'f1',
      limit: '30',
      offset: '0',
      total: '1',
      RaceTable: {
        season: '2021',
        round: '1',
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
            Results: [],
          },
        ],
      },
    },
  };

  it('should return race details on successful API call', async () => {
    (api.get as jest.MockedFunction<typeof api.get>).mockResolvedValue({
      data: mockResponse,
    });

    const result = await fetchRaceDetails(seasonId, round);

    expect(result).toEqual(mockResponse);
    expect(api.get).toHaveBeenCalledWith(`/${seasonId}/${round}/results.json`);
  });

  it('should throw an error on failed API call', async () => {
    const mockError = new Error('Network Error');
    (api.get as jest.MockedFunction<typeof api.get>).mockRejectedValue(
      mockError,
    );

    await expect(fetchRaceDetails(seasonId, round)).rejects.toThrow(
      'Network Error',
    );
    expect(api.get).toHaveBeenCalledWith(`/${seasonId}/${round}/results.json`);
  });

  it('should handle empty response gracefully', async () => {
    const emptyResponse: GetRaceDetailsResponse = {
      MRData: {
        xmlns: 'http://ergast.com/mrd/1.4',
        series: 'f1',
        limit: '30',
        offset: '0',
        total: '0',
        RaceTable: {
          season: '2021',
          round: '1',
          Races: [],
        },
      },
    };

    (api.get as jest.MockedFunction<typeof api.get>).mockResolvedValue({
      data: emptyResponse,
    });

    const result = await fetchRaceDetails(seasonId, round);

    expect(result).toEqual(emptyResponse);
    expect(api.get).toHaveBeenCalledWith(`/${seasonId}/${round}/results.json`);
  });

  it('should handle partial response gracefully', async () => {
    const partialResponse: GetRaceDetailsResponse = {
      MRData: {
        xmlns: 'http://ergast.com/mrd/1.4',
        series: 'f1',
        limit: '30',
        offset: '0',
        total: '1',
        RaceTable: {
          season: '2021',
          round: '1',
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
              Results: [],
            },
          ],
        },
      },
    };

    (api.get as jest.MockedFunction<typeof api.get>).mockResolvedValue({
      data: partialResponse,
    });

    const result = await fetchRaceDetails(seasonId, round);

    expect(result).toEqual(partialResponse);
    expect(api.get).toHaveBeenCalledWith(`/${seasonId}/${round}/results.json`);
  });
});
