import React from "react";
import {
  Container,
  Title,
  Logo,
  ViewForm,
  CustomButton,
  TextButton,
  TextInput,
} from "./styles";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import ifrn from "../../assets/ifrn.png";

export default function Home() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Container>
      <Logo source={ifrn} />
      <Title>Agenda{"\n"}IFRN</Title>

      <ViewForm>
        <TextInput placeholder="Login" />
        <TextInput placeholder="Senha" />
        <CustomButton>
          <TextButton>Entrar</TextButton>
        </CustomButton>
      </ViewForm>
    </Container>
  );
}
