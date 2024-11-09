import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SeasonDetails: React.FC = () => {
  const { seasonId } = useParams<{ seasonId: string }>();

  return (
    <div>
      <h1>Races for Season {seasonId}</h1>
      <p>Click on a race to see its details.</p>
      {/* Example Link to Race Details (replace with dynamic links later) */}
      <Link to={`/season/${seasonId}/race/1`}>Go to Race 1 Details</Link>
    </div>
  );
};

export default SeasonDetails;
