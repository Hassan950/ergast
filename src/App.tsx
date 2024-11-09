import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import SeasonDetails from './pages/SeasonDetails';
import RaceDetails from './pages/RaceDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/season/:seasonId" element={<SeasonDetails />} />

        <Route path="/season/:seasonId/race/:round" element={<RaceDetails />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
