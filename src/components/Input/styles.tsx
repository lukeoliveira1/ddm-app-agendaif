import styled from "styled-components/native";

export const Input = styled.TextInput`
  width: 250px;
  heigth: 30px;
  border-radius: 5px;
  margin-bottom: 12px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;
