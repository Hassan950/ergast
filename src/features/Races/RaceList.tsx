import React from 'react';
import { GetRacesResponse, Race } from './types';
import { useNavigate } from 'react-router-dom';
import { Grid2 as Grid, Button, Stack, Box, Typography } from '@mui/material';
import Item from '../../shared/Item';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const RaceItem: React.FC<Race> = ({
  Circuit,
  raceName,
  round,
  date,
  season,
}) => {
  const navigate = useNavigate();
  return (
    <Item>
      {raceName}
      <Typography variant="h6" component="div" marginBottom={1}>
        {Circuit.circuitName}
      </Typography>
      <Box
        sx={{ display: 'flex' }}
        alignItems={'flex-end'}
        flexDirection={'column'}
      >
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
        <Button
          size="small"
          onClick={() => navigate(`/season/${season}/race/${round}`)}
        >
          Learn More
        </Button>
      </Box>
    </Item>
  );
};

const RaceItems: React.FC<{ data: GetRacesResponse }> = ({ data }) => {
  return (
    <Stack spacing={2}>
      {data?.MRData.RaceTable.Races?.map((race) => (
        <Grid key={race.url} size={{ xs: 12, sm: 6, md: 4 }}>
          <RaceItem {...race} />
        </Grid>
      ))}
    </Stack>
  );
};

export default RaceItems;
