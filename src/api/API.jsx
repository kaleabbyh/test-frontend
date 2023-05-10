/* eslint-disable no-unused-vars */
import axios from "axios";

export const getAllSongs = () => {
  return axios.get("http://localhost:5000/api/song/getAllSongs");
};

export const addSong = async (song) => {
  return axios.post(`http://localhost:5000/api/song/addSong`, song);
};

export const editSong = async (song) => {
  return axios.put(`http://localhost:5000/api/song/editSong/${song._id}`, song);
};

export const deleteSong = async (song) => {
  const deleteSong = await axios.delete(
    `http://localhost:5000/api/song/deleteSong/${song._id}`
  );
  return deleteSong.data;
};
