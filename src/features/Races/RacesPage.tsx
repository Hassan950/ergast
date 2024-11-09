import { Grid2 as Grid, Typography } from '@mui/material';
import Races from './RacesWithPagination';
import ToggleView from '../../shared/ToggleView';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleView } from './slice';
import { useParams } from 'react-router-dom';

const RacesPage: React.FC = () => {
  const { seasonId } = useParams<{ seasonId: string }>();
  const isCardView = useSelector(
    (state: RootState) => state.pinnedRaces.isCardView,
  );
  const dispatch = useDispatch();

  return (
    <div>
      <Grid container justifyContent={'space-between'}>
        <Typography variant="h4">Races for Season {seasonId}</Typography>
        <ToggleView
          isCardView={isCardView}
          onToggle={() => dispatch(toggleView())}
        />
      </Grid>
      <div>
        <Races />
      </div>
    </div>
  );
};

export default RacesPage;
