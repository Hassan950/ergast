import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Race } from './types';

interface PinnedRaceState {
  pinnedRaces: Race[];
  isCardView: boolean;
}

const initialState: PinnedRaceState = {
  pinnedRaces: [],
  isCardView: true,
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
    toggleView: (state) => {
      state.isCardView = !state.isCardView;
    },
  },
});

export const { pinRace, unpinRace, toggleView } = pinnedRaceSlice.actions;
export default pinnedRaceSlice.reducer;
