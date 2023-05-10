/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getSongsFetch,
  editSongFetch,
  addSongFetch,
  deleteSongFetch,
} from "../state/SongState";

const AddSong = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);

  useEffect(() => {
    const song = {
      _id: "6455250e180a6a49b95e68ff",
      title: "updated",
      description: "it hipop music you will love it",
    };

    dispatch(getSongsFetch());
  }, [dispatch]);
  console.log("holla", songs);

  return <div></div>;
};

export default AddSong;
