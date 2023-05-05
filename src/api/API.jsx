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

export const editSong = async (song) => {
  const editSong = await axios.put(
    `http://localhost:5000/api/song/editSong/${song._id}`,
    song
  );
  return editSong.data;
};

export const deleteSong = async (song) => {
  const deleteSong = await axios.delete(
    `http://localhost:5000/api/song/deleteSong/${song._id}`
  );
  return deleteSong.data;
};
