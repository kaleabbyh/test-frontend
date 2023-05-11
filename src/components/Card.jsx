/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "./style/Button.styled";
import { StyledCard } from "./style/Card.styled";
import { useNavigate } from "react-router-dom";

import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addSongFetch,
  deleteSongFetch,
  getSongsFetch,
} from "../state/SongState";

export default function Card({ item: { _id, title, description, image } }) {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteSongFetch({ _id: id }));
    navigate("/");
    // window.location.reload();
  };

  const navigate = useNavigate();
  return (
    <StyledCard>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button
          bg="#5F1D90"
          color="#fff"
          onClick={() => navigate(`/editsong/${_id}`)}
        >
          Edit Music
        </Button>
        <Button bg="#ff0099" color="#fff" onClick={() => handleDelete(_id)}>
          Delete Music
        </Button>
      </div>
    </StyledCard>
  );
}
