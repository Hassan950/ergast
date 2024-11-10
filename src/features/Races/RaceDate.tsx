import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Typography } from '@mui/material';
import { FC } from 'react';

interface RaceDateProps {
  date: string;
}

const RaceDate: FC<RaceDateProps> = ({ date }) => {
  return (
    <Typography
      variant="body2"
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <CalendarMonthIcon />
      {new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })}
    </Typography>
  );
};

export default RaceDate;
