import { configureStore } from '@reduxjs/toolkit';
import { reduxLogger } from 'redux-logger';
import missionReducer from './missions/missionSlice';

const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
