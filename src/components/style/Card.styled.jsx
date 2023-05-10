import styled from "@emotion/styled";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 100px;
  padding: 20px;
  flex-direction: "row";

  img {
    width: 80%;
    height: 80%;
    border-radius: 10px;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: 740px) {
    flex-direction: column;
    margin: 40px;
    text-align: center;
  }
`;
