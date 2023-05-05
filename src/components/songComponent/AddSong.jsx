/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSongsFetch, addSongFetch } from "../state/SongState";
const AddSong = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);

  useEffect(() => {
    dispatch(
      addSongFetch({
        title: "amazing music",
        description: "it hipop music you will love it",
      })
    );
  }, [dispatch]);
  console.log(songs);

  return <div>Song</div>;
};

export default AddSong;
