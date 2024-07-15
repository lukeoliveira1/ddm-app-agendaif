import { CheckBox } from "react-native-elements";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Container, TaskContainer, TextTask, Title, Icons } from "./styles";
import { TouchableOpacity } from "react-native";
import { theme } from "../../theme/light";

interface TaskProps {
  title: string;
  active: boolean;
}

const Task = ({ title, active }: TaskProps) => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleCheckboxToggle = () => {};

  return (
    <Container active={active}>
      <TaskContainer>
        <Icons>
          <CheckBox
            checked={active}
            checkedColor={theme.colors.primary}
            onPress={handleCheckboxToggle}
          />
          <TextTask>
            <Title active={active}>{title}</Title>
          </TextTask>
        </Icons>
        <Icons>
          <TouchableOpacity onPress={() => alert("apaguei")}>
            <FontAwesome name="trash" color={theme.colors.gray2} size={24} />
          </TouchableOpacity>
        </Icons>
      </TaskContainer>
    </Container>
  );
};

export default Task;
