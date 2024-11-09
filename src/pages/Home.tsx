import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Season List</h1>
      <p>Click on a season to see its races.</p>
      {/* Example Link to Season Details (replace with dynamic links later) */}
      <Link to="/season/2023">Go to 2023 Season Details</Link>
    </div>
  );
};

export default Home;
