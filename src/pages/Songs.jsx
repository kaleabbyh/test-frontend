/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSongFetch, getSongsFetch } from "../state/SongState";
import contents from "../contents";
import { Container } from "../components/style/Container.styled";
import Card from "../components/Card";

const Songs = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);

  useEffect(() => {
    // dispatch(
    //   addSongFetch({
    //     title: "amazing music",
    //     description: "it hipop music you will love it",
    //   })
    // );

    dispatch(getSongsFetch());
  }, [dispatch]);
  console.log(songs);

  return (
    <Container>
      {contents.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </Container>
  );
};

export default Songs;
