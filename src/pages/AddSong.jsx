/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { getSongsFetch, addSongFetch } from "../state/SongState";

const StyledInput = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 6px;
  font-size: 16px;

  color: #333;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    border-color: #5f9ea0;
  }
`;

const StyledForm = styled.form`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  width:100%
  margin:100px;
  color: #333;
  display: flex;
  flex-direction: column;
 
`;

const AddSong = () => {
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

        <button type="submit">Submit</button>
      </StyledForm>
    </div>
  );
};

export default AddSong;
