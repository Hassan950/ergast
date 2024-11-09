import React from 'react';
import { GetRacesResponse, Race } from './types';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Grid2 as Grid,
  CardActions,
  Button,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const RaceCard: React.FC<Race> = ({
  Circuit,
  raceName,
  round,
  date,
  season,
}) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {raceName}
        </Typography>
        <Typography variant="h6" component="div" marginBottom={1}>
          {Circuit.circuitName}
        </Typography>
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
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`/season/${season}/race/${round}`)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

const RaceCards: React.FC<{ data: GetRacesResponse }> = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data?.MRData.RaceTable.Races?.map((race) => (
        <Grid key={race.url} size={{ xs: 12, sm: 6, md: 4 }}>
          <RaceCard {...race} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RaceCards;
