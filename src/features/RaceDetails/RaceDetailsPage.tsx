import { GetRaceDetailsResponse } from './types';
import ResultsTable from './ResultsTable';
import { Typography, Box } from '@mui/material';
import PerformanceChart from './PerformanceChat';

const RaceDetailsPage = (
  data: GetRaceDetailsResponse['MRData']['RaceTable'],
) => {
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

export default RaceDetailsPage;
