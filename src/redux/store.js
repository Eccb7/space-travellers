import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import missionReducer from './missions/missionSlice';

const logger = createLogger();
const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
