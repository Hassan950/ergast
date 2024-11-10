import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import FallbackHandler from '../../shared/FallbackHandler';
import { fetchRaceDetails } from './services';
import { GetRaceDetailsResponse } from './types';
import ResultsTable from './ResultsTable';
import { Typography, Box } from '@mui/material';
import PerformanceChart from './PerformanceChat';

const Details = (data: GetRaceDetailsResponse['MRData']['RaceTable']) => {
  const { raceName, Circuit, date, Results } = data.Races[0];

  return (
    <>
      <Box>
        <Typography variant="body1">Race: {raceName}</Typography>
        <Typography variant="body1">Circuit: {Circuit.circuitName}</Typography>
        <Typography variant="body2" marginBottom={2}>
          {new Date(date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </Typography>
      </Box>
      <ResultsTable results={Results} />
      <PerformanceChart results={Results} />
    </>
  );
};

const RaceDetailsPage = () => {
  const { seasonId, round } = useParams<{ seasonId: string; round: string }>();
  const {
    data: response,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['seasons', seasonId, 'race', round],
    queryFn: () => fetchRaceDetails(seasonId || '', round || ''),
  });

  return (
    <Box>
      <Typography variant="h5">
        Details for Round {round} in Season {seasonId}
      </Typography>
      <FallbackHandler isLoading={isLoading} isError={isError} data={response}>
        {response?.MRData.RaceTable && (
          <Details {...response.MRData.RaceTable} />
        )}
      </FallbackHandler>
    </Box>
  );
};

export default RaceDetailsPage;
