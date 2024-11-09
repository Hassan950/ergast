import React from 'react';
import { Link } from 'react-router-dom';
import SeasonsPage from '../features/Seasons/SeasonsPage';
import { Container } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container>
      <SeasonsPage />
    </Container>
  );
};

export default Home;
