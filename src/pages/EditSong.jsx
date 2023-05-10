/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getSongsFetch, editSongFetch } from "../state/SongState";
import { Button } from "../components/style/Button.styled";
import {
  StyledForm,
  StyledInput,
  StyledTextArea,
} from "../components/style/Form.styled";
import { useNavigate, useParams } from "react-router-dom";

const EditSong = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { songs, isLoading } = useSelector((state) => state.songs);
  const song = songs.filter((song) => song._id === id);
  console.log(songs);

  const [formData, setFormData] = useState({
    title: song[0].title,
    description: song[0].description,
    image: song[0].image,
  });

  const { title, description, image } = formData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const musicData = {
      _id: id,
      title,
      description,
      image,
    };
    console.log(musicData);
    dispatch(editSongFetch(musicData));
    navigate("/");
  };

  return (
    <div>
      <StyledForm action="#" method="POST" onSubmit={onSubmit}>
        <label htmlFor="title">Title:</label>
        <StyledInput
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={onChange}
          required
        />

        <label htmlFor="image">Image:</label>
        <StyledInput
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={onChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <StyledTextArea
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={onChange}
          required
        ></StyledTextArea>

        <Button bg="#4C0182" color="#ffff" type="submit">
          update song
        </Button>
      </StyledForm>
    </div>
  );
};

export default EditSong;
