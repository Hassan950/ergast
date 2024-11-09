import React from 'react';
import { IconButton } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';

type ToggleViewProps = {
  onToggle: () => void;
  isCardView: boolean;
};

const ToggleView: React.FC<ToggleViewProps> = ({ onToggle, isCardView }) => {
  return (
    <div>
      <IconButton
        onClick={onToggle}
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
        onClick={onToggle}
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
