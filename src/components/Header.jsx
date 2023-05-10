/* eslint-disable no-unused-vars */
import { StyledHeader } from "./style/Header.styled";
import { Button } from "./style/Button.styled";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <div>
        <h4>Music for Fans</h4>
        <Button bg="#ff0099" color="#fff" onClick={() => navigate("/addsong")}>
          Add Music
        </Button>
      </div>
    </StyledHeader>
  );
}
