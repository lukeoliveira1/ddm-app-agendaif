import React from "react";
import {
  Container,
  StyledText,
  CustomButton,
  TextButton,
  TextInput,
  styles,
} from "./styles";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Dropdown } from "react-native-element-dropdown";

export default function TaskRegistration() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const categories = [
    { label: "Compras", value: "shopping" },
    { label: "Reuniões", value: "meetings" },
    { label: "Treinamentos", value: "trainings" },
    { label: "Leituras", value: "readings" },
    { label: "Pesquisas", value: "research" },
    { label: "Exercícios", value: "exercises" },
    { label: "Revisões", value: "reviews" },
    { label: "Trabalhos", value: "assignments" },
    { label: "Eventos", value: "events" },
    { label: "Consultas Médicas", value: "medical-consultations" },
    { label: "Hobbies", value: "hobbies" },
  ];

  function handleDropdownChange() {
    return 0;
  }

  return (
    <Container>
      <StyledText>Cadastro de Tarefa</StyledText>

      <TextInput placeholder="Título" />
      <TextInput placeholder="Descrição" />
      <Dropdown
        data={categories}
        labelField="label"
        valueField="value"
        placeholder="Categoria"
        placeholderStyle={{
          color: "#666666",
          fontFamily: "Roboto_400Regular",
          fontSize: 14,
        }}
        selectedTextStyle={{
          color: "#666666",
          fontFamily: "Roboto_400Regular",
          fontSize: 14,
        }}
        onChange={handleDropdownChange}
        itemTextStyle={{
          color: "#666666",
          fontFamily: "Roboto_400Regular",
          fontSize: 14,
        }}
        style={styles.dropdown}
      />
      <TextInput placeholder="Data" />
      <CustomButton>
        <TextButton>Cadastrar</TextButton>
      </CustomButton>
    </Container>
  );
}
