import styled from "@emotion/styled";

export const StyledInput = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
  margin-top: 10px;
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
    margin: 50px 50px;
    padding: 10px 20px;
  }
`;

export const StyledTextArea = styled.textarea`
  height: 100px;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #5f9ea0;
  }
`;
