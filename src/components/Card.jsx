/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { StyledCard } from "./style/Card.styled";

export default function Card({ item: { id, title, description, image } }) {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div>
        <img src="../assets/images/music.jpeg" alt="" />
      </div>
    </StyledCard>
  );
}
