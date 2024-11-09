import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Race } from './types';

interface PinnedRaceState {
  pinnedRaces: Race[];
}

const initialState: PinnedRaceState = {
  pinnedRaces: [],
};

const pinnedRaceSlice = createSlice({
  name: 'pinnedRaces',
  initialState,
  reducers: {
    pinRace: (state, action: PayloadAction<Race>) => {
      state.pinnedRaces.push(action.payload);
    },
    unpinRace: (state, action: PayloadAction<string>) => {
      state.pinnedRaces = state.pinnedRaces.filter(
        (race) => race.round !== action.payload,
      );
    },
  },
});

export const { pinRace, unpinRace } = pinnedRaceSlice.actions;
export default pinnedRaceSlice.reducer;
