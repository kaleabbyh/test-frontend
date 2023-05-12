/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addSongFetch,
  deleteSongFetch,
  getSongsFetch,
} from "../state/SongState";

import { Container } from "../components/style/Container.styled";
import Card from "../components/Card";

const Songs = () => {
  const dispatch = useDispatch();
  const { songs } = useSelector((state) => state.songs.songs);
  const allSongs = songs.reverse();

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  return (
    <Container>
      {allSongs.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </Container>
  );
};

export default Songs;
