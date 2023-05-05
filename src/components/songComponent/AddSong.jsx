/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getSongsFetch,
  editSongFetch,
  addSongFetch,
  deleteSongFetch,
} from "../../state/SongState";

const Songs = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);

  useEffect(() => {
    const song = {
      _id: "6455066c3625e4a665e06c63",
      title: "amazing music 1",
      description: "it hipop music you will love it",
    };

    dispatch(getSongsFetch());
    // dispatch(deleteSongFetch(song));
  }, [dispatch]);
  console.log(songs);

  return <div>Song</div>;
};

export default Songs;
