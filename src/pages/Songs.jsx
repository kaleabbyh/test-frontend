/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSongFetch, getSongsFetch } from "../state/SongState";
const Songs = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);

  useEffect(() => {
    dispatch(
      addSongFetch({
        title: "amazing music",
        description: "it hipop music you will love it",
      })
    );

    dispatch(getSongsFetch());
  }, [dispatch]);
  console.log(songs);

  return <div>Song</div>;
};

export default Songs;
