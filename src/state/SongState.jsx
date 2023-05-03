/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  isLoading: false,
  errorMessage: "",
};

export const songslice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    isLoading: false,
  },
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true;
    },
    getSongsSuccess: (state, action) => {
      state.isLoading = false;
      state.songs = action.payload;
    },
    getSongsFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { getSongsFetch, getSongsSuccess, getSongsFailure } =
  songslice.actions;

export default songslice.reducer;
