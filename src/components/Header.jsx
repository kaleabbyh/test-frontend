/* eslint-disable no-unused-vars */
import { StyledHeader } from "./style/Header.styled";
import { Button } from "./style/Button.styled";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <div>
        <Link to={"/"}>
          <h2>Home</h2>
        </Link>
        <Button bg="#5F1D90" color="#fff" onClick={() => navigate("/addsong")}>
          Add Music
        </Button>
      </div>
    </StyledHeader>
  );
}
