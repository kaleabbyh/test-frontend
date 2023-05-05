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
    // get songs actions
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

    // add song actions
    addSongFetch: (state) => {
      state.isLoading = true;
    },
    addSongSuccess: (state, action) => {
      state.isLoading = false;
      state.songs.push(action.payload);
    },
    addSongFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    // edit song actions
    editSongFetch: (state) => {
      state.isLoading = true;
    },
    editSongSuccess: (state, action) => {
      state.isLoading = false;
      state.songs = action.payload;
    },
    editSongFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  getSongsFetch,
  getSongsSuccess,
  getSongsFailure,

  addSongFailure,
  addSongSuccess,
  addSongFetch,

  editSongFailure,
  editSongSuccess,
  editSongFetch,
} = songslice.actions;

export default songslice.reducer;
