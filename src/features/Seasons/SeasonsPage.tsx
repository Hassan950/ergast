import { Grid2 as Grid, Typography } from '@mui/material';
import Seasons from './SeasonsWithPagination';
import ToggleView from '../../shared/ToggleView';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleView } from './slice';

const SeasonsPage: React.FC = () => {
  const dispatch = useDispatch();
  const isCardView = useSelector(
    (state: RootState) => state.seasons.isCardView,
  );

  return (
    <div>
      <Grid container justifyContent={'space-between'}>
        <Typography variant="h4">Seasons</Typography>
        <ToggleView
          isCardView={isCardView}
          onToggle={() => dispatch(toggleView())}
        />
      </Grid>
      <div>
        <Seasons />
      </div>
    </div>
  );
};

export default SeasonsPage;
