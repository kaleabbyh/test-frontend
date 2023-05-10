import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 0;
  div {
    padding: 20px;
    margin: 0px 10px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 500px) {
      flex-direction: column;
      text-align: center;
    }
  }
`;
