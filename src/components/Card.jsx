/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "./style/Button.styled";
import { StyledCard } from "./style/Card.styled";

export default function Card({ item: { title, description, image } }) {
  return (
    <StyledCard>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button bg="#ff0099" color="#fff">
          Edit Music
        </Button>
        <Button bg="#ff0099" color="#fff">
          Delete Music
        </Button>
      </div>
    </StyledCard>
  );
}
