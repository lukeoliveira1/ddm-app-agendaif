import React from "react";
import styled from "styled-components/native";

// Definindo componentes estilizados
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const StyledText = styled.Text`
  font-size: 20px;
  color: #333;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: #6200ea;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export default function TaskRegistration() {
  return (
    <Container>
      <StyledText>Olá, Styled Components!</StyledText>
      <StyledButton onPress={() => alert("Botão pressionado!")}>
        <ButtonText>Pressione-me</ButtonText>
      </StyledButton>
    </Container>
  );
}
