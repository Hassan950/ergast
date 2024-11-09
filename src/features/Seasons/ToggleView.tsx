import React from 'react';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { toggleView } from './slice';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';

const ToggleView: React.FC = () => {
  const dispatch = useDispatch();
  const isCardView = useSelector(
    (state: RootState) => state.seasons.isCardView,
  );

  return (
    <div>
      <IconButton
        onClick={() => dispatch(toggleView())}
        color={isCardView ? 'default' : 'primary'}
        aria-label="List View"
        disabled={!isCardView}
        sx={{
          '&:disabled > *': {
            fill: (theme) => theme.palette.primary.main,
          },
        }}
      >
        <FormatListBulletedIcon />
      </IconButton>
      <IconButton
        onClick={() => dispatch(toggleView())}
        color={isCardView ? 'primary' : 'default'}
        aria-label="Grid View"
        disabled={isCardView}
        sx={{
          '&:disabled > *': {
            fill: (theme) => theme.palette.primary.main,
          },
        }}
      >
        <GridViewIcon />
      </IconButton>
    </div>
  );
};

export default ToggleView;
