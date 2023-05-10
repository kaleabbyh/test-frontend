import styled from "@emotion/styled";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme || 540}) {
    flex-direction: column;
    text-align: center;
  }
`;
