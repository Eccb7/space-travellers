import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  Data: [],
  loading: false,
  error: '',
};

const rocketURL = 'https://api.spacexdata.com/v4/rockets';
export const fetchData = createAsyncThunk('rockets/fetchData', async () => {
  const response = await axios.get(rocketURL);
  return response.data.map((obj) => ({
    id: obj.id,
    name: obj.name,
    type: obj.type,
    description: obj.description,
    image: obj.flickr_images[0],
    wikipedia: obj.wikipedia,
    reserved: false,
  }));
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserve: (state, action) => {
      const newArray = state.Data.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      return { ...state, Data: newArray };
    },
    cancel: (state, action) => {
      const newArray = state.Data.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      return { ...state, Data: newArray };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.Data = action.payload;
    });

    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { reserve, cancel } = rocketSlice.actions;
export default rocketSlice.reducer;
