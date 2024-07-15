import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const View = styled.View`
  padding-bottom: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-top: 50px;
  color: ${({ theme }) => theme.colors.background};
  font-weight: bold;
  font-family: "Roboto_700Bold";
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  margin-top: 50px;
  color: ${({ theme }) => theme.colors.background};
  font-family: "Roboto_400Regular";
`;

export const BoldSubtitle = styled.Text`
  font-size: 14px;
  margin-top: 50px;
  color: ${({ theme }) => theme.colors.background};
  font-family: "Roboto_400Regular";
  font-weight: bold;
`;
