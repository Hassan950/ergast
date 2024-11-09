import { createSlice } from '@reduxjs/toolkit';

interface SeasonsState {
  isCardView: boolean;
}

const initialState: SeasonsState = {
  isCardView: true,
};

const pinnedRaceSlice = createSlice({
  name: 'seasons',
  initialState,
  reducers: {
    toggleView: (state) => {
      state.isCardView = !state.isCardView;
    },
  },
});

export const { toggleView } = pinnedRaceSlice.actions;
export default pinnedRaceSlice.reducer;
