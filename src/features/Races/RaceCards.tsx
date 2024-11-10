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
  Box,
} from '@mui/material';
import useRaces from './useRaces';
import FavoriteButton from './FavoriteButton';
import RaceDate from './RaceDate';
import { CSSTransition } from 'react-transition-group';

const RaceCard: React.FC<Race> = (race) => {
  const navigate = useNavigate();
  const { Circuit, raceName, round, date, season } = race;

  const { handlePinned, isPinned } = useRaces(race);

  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {raceName}
          </Typography>
          <FavoriteButton onClick={handlePinned} isClicked={isPinned} />
        </Box>
        <Typography variant="h6" component="div" marginBottom={1}>
          {Circuit.circuitName}
        </Typography>
        <RaceDate date={date} />
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
        <CSSTransition key={race.url} timeout={300} classNames="race">
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <RaceCard {...race} />
          </Grid>
        </CSSTransition>
      ))}
    </Grid>
  );
};

export default RaceCards;
