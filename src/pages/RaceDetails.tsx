import React from 'react';
import { useParams } from 'react-router-dom';

const RaceDetails: React.FC = () => {
  const { seasonId, round } = useParams<{
    seasonId: string;
    round: string;
  }>();

  return (
    <div>
      <h1>
        Details for Race {round} in Season {seasonId}
      </h1>
      <p>Driver performance and details would go here.</p>
    </div>
  );
};

export default RaceDetails;
