import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { photoService } from '../../services/picture.service';
import { IPicture } from '../../interfaces';

interface PictureState {
  photos: IPicture[];
  status: null | string;
  error: null | undefined;
}

export const getPhotos = createAsyncThunk(
  'photoSlice/getPhotos',
  async (_, { rejectWithValue }) => {
    try {
      return await photoService.allPhotos();
    } catch (error) {
      rejectWithValue((error as AxiosError).message);
    }
  }
);

const initialState: PictureState = {
  photos: [],
  status: null,
  error: null
};
const photoSlice = createSlice({
  name: 'photoSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhotos.pending, (state) => {
      state.status = 'pending...';
      state.error = null;
    });
    builder.addCase(getPhotos.fulfilled, (state, action) => {
      if (action.payload) {
        state.status = 'fulfilled';
        state.photos = action.payload;
      }
    });
    builder.addCase(getPhotos.rejected, (state) => {
      state.status = 'error';
    });
  }
});
const photoReducer = photoSlice.reducer;

export default photoReducer;
