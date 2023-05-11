/* eslint-disable no-unused-vars */
import axios from "axios";

const baseUrl = "https://addissoftware-test-api.onrender.com/api/song";

export const getAllSongs = () => {
  return axios.get(`${baseUrl}/getAllSongs`);
};

export const addSong = async (song) => {
  return axios.post(`${baseUrl}/addSong`, song);
};

export const editSong = async (song) => {
  return axios.put(`${baseUrl}/editSong/${song._id}`, song);
};

export const deleteSong = async (song) => {
  const deleteSong = await axios.delete(`${baseUrl}/deleteSong/${song._id}`);
  return deleteSong.data;
};
