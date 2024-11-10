import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import FallbackHandler from '../../shared/FallbackHandler';
import { fetchRaceDetails } from './services';
import { Typography, Box } from '@mui/material';
import RaceDetailsPage from './RaceDetailsPage';

const RaceDetailsPageWrapper = () => {
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
          <RaceDetailsPage {...response.MRData.RaceTable} />
        )}
      </FallbackHandler>
    </Box>
  );
};

export default RaceDetailsPageWrapper;
