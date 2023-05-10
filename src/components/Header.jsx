/* eslint-disable no-unused-vars */
import { StyledHeader } from "./style/Header.styled";
import { Button } from "./style/Button.styled";

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <h4>Music for Fans</h4>
        <Button bg="#ff0099" color="#fff">
          Add Music
        </Button>
      </div>
    </StyledHeader>
  );
}
