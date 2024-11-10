import React from 'react';
import { GetRacesResponse, Race } from './types';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, Box, Typography } from '@mui/material';
import Item from '../../shared/Item';
import useRaces from './useRaces';
import FavoriteButton from './FavoriteButton';
import RaceDate from './RaceDate';

const RaceItem: React.FC<Race> = (race) => {
  const navigate = useNavigate();
  const { Circuit, raceName, round, date, season } = race;

  const { handlePinned, isPinned } = useRaces(race);

  return (
    <Item>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {raceName}
        <FavoriteButton onClick={handlePinned} isClicked={isPinned} />
      </Box>
      <Typography variant="h6" component="div" marginBottom={1}>
        {Circuit.circuitName}
      </Typography>
      <Box
        sx={{ display: 'flex' }}
        alignItems={'flex-end'}
        flexDirection={'column'}
      >
        <RaceDate date={date} />
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

const RaceList: React.FC<{ data: GetRacesResponse }> = ({ data }) => {
  return (
    <Stack spacing={2}>
      {data?.MRData.RaceTable.Races?.map((race) => (
        <Box key={race.url}>
          <RaceItem {...race} />
        </Box>
      ))}
    </Stack>
  );
};

export default RaceList;
