/* eslint-disable no-unused-vars */
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";

export const getAllSongs = async () => {
  const song = await axios.get("http://localhost:5000/api/song/getAllSongs");
  return song.data;
};

export const addSong = async (song) => {
  const addSong = await axios.post(
    `http://localhost:5000/api/song/addSong`,
    song
  );
  return addSong.data;
};
