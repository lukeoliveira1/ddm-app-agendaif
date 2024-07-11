import React from "react";
import {
  Container,
  Title,
  Logo,
  ViewForm,
  CustomButton,
  TextButton,
} from "./styles";
import ifrn from "../../assets/ifrn.png";
import InputForm from "../../components/Input";

export default function Home() {
  return (
    <Container>
      <Logo source={ifrn} />
      <Title>Agenda{"\n"}IFRN</Title>

      <ViewForm>
        <InputForm placeholder="Login" />
        <InputForm placeholder="Senha" />
        <CustomButton>
          <TextButton>Entrar</TextButton>
        </CustomButton>
      </ViewForm>
    </Container>
  );
}
