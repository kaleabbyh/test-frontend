import styled from "@emotion/styled";

export const StyledInput = styled.input`
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

export const StyledForm = styled.form`
  padding: 50px 100px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  font-size: 16px;
  margin: 50px 150px;
  color: #333;
  display: flex;
  flex-direction: column;

  @media (max-width: 740px) {
    margin: 40px 50px;
  }
`;
