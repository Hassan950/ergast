// src/store/index.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import pinnedRaceReducer from '../features/Races/slice';
import seasonsReducer from '../features/Seasons/slice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['pinnedRaces'],
};

const rootReducer = combineReducers({
  pinnedRaces: pinnedRaceReducer,
  seasons: seasonsReducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
