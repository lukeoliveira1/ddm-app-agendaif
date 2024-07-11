import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #fefefe;
  font-weight: bold;
  text-align: center;
`;

export const Logo = styled.Image`
  margin-top: 100px;
  margin-bottom: 70px;
  width: 120px;
  height: 160px;
`;

export const TextInputForm = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.background};
  width: 120px;
  height: 20px;
  margin-bottom: 20px;
`;

export const ViewForm = styled.View`
  flex: 1;
  align-items: "center";
  justify-content: "center";
  margin-top: 50px;
`;

export const CustomButton = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const TextButton = styled.Text`
  flex: 1;
  font-size: 16px;
  text-align: "center";
  color: ${({ theme }) => theme.colors.background};
`;
