import React from "react";
import { Container, Title, Subtitle, View, BoldSubtitle } from "./styles";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import Task from "../../components/Task";

export default function () {
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
      <View>
        <Title>Agenda IFRN</Title>
        <Subtitle>
          Você tem <BoldSubtitle>2 tarefas</BoldSubtitle>
        </Subtitle>
      </View>

      <Task title="Pagar boleto" active={false} />
      <Task title="Arrumar a cama" active={true} />
      <Task title="Entregar notebook" active={false} />
    </Container>
  );
}
