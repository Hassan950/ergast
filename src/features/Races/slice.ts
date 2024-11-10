import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Race } from './types';

// pinned races is object where the key is the season and the value is an array of races
interface PinnedRaceState {
  pinnedRaces: Record<string, Race[]>;
  isCardView: boolean;
}

const initialState: PinnedRaceState = {
  pinnedRaces: {},
  isCardView: true,
};

const pinnedRaceSlice = createSlice({
  name: 'pinnedRaces',
  initialState,
  reducers: {
    pinRace: (state, action: PayloadAction<Race>) => {
      state.pinnedRaces[action.payload.season] =
        state.pinnedRaces[action.payload.season] || [];
      state.pinnedRaces[action.payload.season].push(action.payload);
    },
    unpinRace: (state, action: PayloadAction<Race>) => {
      state.pinnedRaces[action.payload.season] = state.pinnedRaces[
        action.payload.season
      ].filter((race) => race.round !== action.payload.round);
    },
    toggleView: (state) => {
      state.isCardView = !state.isCardView;
    },
  },
});

export const { pinRace, unpinRace, toggleView } = pinnedRaceSlice.actions;
export default pinnedRaceSlice.reducer;
