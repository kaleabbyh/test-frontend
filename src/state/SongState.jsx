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
      state.songs = [...state.songs, action.payload];
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
      const songIndex = state.songs.findIndex(
        (song) => song.id === action.payload.id
      );
      state.songs[songIndex] = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    editSongFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    deleteSongFetch: (state) => {
      state.isLoading = true;
    },
    deleteSongSuccess: (state, action) => {
      state.songs = state.songs.filter((song) => song.id !== action.payload);
      state.isLoading = false;
      state.error = null;
    },
    deleteSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getSongsFetch,
  getSongsSuccess,
  getSongsFailure,

  addSongFetch,
  addSongSuccess,
  addSongFailure,

  editSongFetch,
  editSongSuccess,
  editSongFailure,

  deleteSongFetch,
  deleteSongSuccess,
  deleteSongFailure,
} = songslice.actions;

export default songslice.reducer;
