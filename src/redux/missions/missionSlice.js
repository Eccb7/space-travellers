import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: '',
  missions: [],
};

const url = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = createAsyncThunk('mission/fetchMissions', () => axios.get(url).then((response) => response.data));

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.loading = false;
        state.missions = action.payload;
        state.error = '';
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.loading = false;
        state.missions = [];
        state.error = action.error.message;
      });
  },
});

export default missionSlice.reducer;
export { fetchMissions };
