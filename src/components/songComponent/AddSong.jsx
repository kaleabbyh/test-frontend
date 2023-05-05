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
    };

    dispatch(getSongsFetch());
    // dispatch(editSongFetch(song));
    // dispatch(addSongFetch(song));
    // dispatch(deleteSongFetch(song));
  }, [dispatch]);
  console.log("holla", songs);

  return <div></div>;
};

export default Songs;
