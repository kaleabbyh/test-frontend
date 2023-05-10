/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getSongsFetch, addSongFetch } from "../state/SongState";
import { Button } from "../components/style/Button.styled";
import { StyledForm, StyledInput } from "../components/style/Form.styled";
import { useNavigate } from "react-router-dom";

const AddSong = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
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
      title,
      description,
      image,
    };
    console.log(musicData);
    dispatch(addSongFetch(musicData));
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

        <label htmlFor="description">Description:</label>
        <StyledInput
          type="text"
          id="description"
          name="description"
          value={description}
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

        <Button
          bg="#4C0182"
          color="#ffff"
          type="submit"
          onClick={() => navigate("/")}
        >
          add song
        </Button>
      </StyledForm>
    </div>
  );
};

export default AddSong;
