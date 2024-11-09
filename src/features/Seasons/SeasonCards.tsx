import React from 'react';
import { GetSeasonsResponse, Season } from './types';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Grid2 as Grid,
  CardActions,
  Button,
} from '@mui/material';

const SeasonCard: React.FC<Season> = ({ season }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Season
        </Typography>
        <Typography variant="h6" component="div">
          {season}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/season/${season}`)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

const SeasonCards: React.FC<{ data: GetSeasonsResponse }> = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data?.MRData.SeasonTable.Seasons?.map(({ season, url }) => (
        <Grid key={season} size={{ xs: 12, sm: 6, md: 4 }}>
          <SeasonCard season={season} url={url} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SeasonCards;
