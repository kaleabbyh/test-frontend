/* eslint-disable no-unused-vars */
import { StyledHeader } from "./style/Header.styled";
import { Container } from "./style/Container.styled";
import { Flex } from "./style/Flex.styled";
import { Button } from "./style/Button.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Flex>
          <h4>Build The Community Your Fans Will Love</h4>
          <Button bg="#ff0099" color="#fff">
            Add Music
          </Button>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
