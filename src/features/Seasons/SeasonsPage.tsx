import { Box, Grid2 as Grid, Typography } from '@mui/material';
import Seasons from './SeasonsWithPagination';
import ToggleView from './ToggleView';

const SeasonsPage: React.FC = () => {
  return (
    <div>
      <Grid container justifyContent={'space-between'}>
        <Typography variant="h4">Seasons</Typography>
        <ToggleView />
      </Grid>
      <div>
        <Seasons />
      </div>
    </div>
  );
};

export default SeasonsPage;
