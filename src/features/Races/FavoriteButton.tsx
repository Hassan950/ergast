import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FC } from 'react';

interface ButtonProps {
  onClick: () => void;
  isClicked: boolean;
}

const FavoriteButton: FC<ButtonProps> = ({ onClick, isClicked }) => {
  return (
    <IconButton
      aria-label="add to favorites"
      onClick={onClick}
      sx={{
        padding: 0,
      }}
    >
      {isClicked ? <FavoriteIcon color="error" /> : <FavoriteIcon />}
    </IconButton>
  );
};

export default FavoriteButton;
