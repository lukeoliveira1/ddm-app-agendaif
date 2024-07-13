import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const StyledText = styled.Text`
  font-size: 24px;
  font-family: "Roboto_700Bold";
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TextInput = styled.TextInput`
  width: 250px;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 12px;
  padding: 10px;
  border-color: ${({ theme }) => theme.colors.gray};
  border: 0.5px;
  background-color: ${({ theme }) => theme.colors.background};
  font-family: "Roboto_400Regular";
`;

export const CustomButton = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-family: "Roboto_500Medium";
  color: ${({ theme }) => theme.colors.background};
`;

export const styles = StyleSheet.create({
  dropdown: {
    width: 250,
    height: 50,
    borderColor: "#666666",
    color: "#666666",
    borderWidth: 0.7,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
});
