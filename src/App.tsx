import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SeasonDetails from './pages/SeasonDetails';
import RaceDetails from './pages/RaceDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Season Details Route */}
        <Route path="/season/:seasonId" element={<SeasonDetails />} />

        {/* Race Details Route */}
        <Route
          path="/season/:seasonId/race/:raceId"
          element={<RaceDetails />}
        />
      </Routes>
    </Router>
  );
};

export default App;
