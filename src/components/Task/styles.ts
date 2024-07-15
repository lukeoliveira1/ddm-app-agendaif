import { SafeAreaView, View, Text } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)<{ active: boolean }>`
  flex-direction: row;
  background-color: ${({ active }) =>
    active
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.background};
  padding: 5px 15px;
  border-radius: 10px;
`;

export const TaskContainer = styled(SafeAreaView)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextTask = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled(Text)<{ active: boolean }>`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: bold;
  font-family: "Roboto_700Bold";
  text-decoration-line: ${({ active }) => (active ? "line-through" : "none")};
`;

export const Icons = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
