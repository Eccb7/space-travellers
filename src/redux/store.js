import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import missionReducer from './missions/missionSlice';
import rocketsSlice from './rockets/rocketsSlice';

const logger = createLogger();
const store = configureStore({
  reducer: {
    mission: missionReducer,
    rockets: rocketsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
