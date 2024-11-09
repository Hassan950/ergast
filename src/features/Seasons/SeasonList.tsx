import React from 'react';
import { GetSeasonsResponse, Season } from './types';
import { useNavigate } from 'react-router-dom';
import {
  Grid2 as Grid,
  Button,
  ListItem,
  ListItemText,
  Stack,
  styled,
  Paper,
  Box,
} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.h4,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: theme.palette.text.primary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const SeasonItem: React.FC<Season> = ({ season }) => {
  const navigate = useNavigate();
  return (
    <Item>
      Season {season}
      <Box sx={{ display: 'flex' }} justifyContent={'flex-end'}>
        <Button size="small" onClick={() => navigate(`/season/${season}`)}>
          Learn More
        </Button>
      </Box>
    </Item>
  );
};

const SeasonItems: React.FC<{ data: GetSeasonsResponse }> = ({ data }) => {
  return (
    <Stack spacing={2}>
      {data?.MRData.SeasonTable.Seasons?.map(({ season, url }) => (
        <Grid key={season} size={{ xs: 12, sm: 6, md: 4 }}>
          <SeasonItem season={season} url={url} />
        </Grid>
      ))}
    </Stack>
  );
};

export default SeasonItems;
