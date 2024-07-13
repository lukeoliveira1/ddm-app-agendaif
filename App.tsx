import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import Home from "./src/screens/Home";
import { light } from "./src/theme/light";
import TaskRegistration from "./src/screens/TaskRegistration";

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <StatusBar animated={true} backgroundColor={light.colors.primary}/>
      {/* <Home /> */}
      <TaskRegistration />
    </ThemeProvider>
  );
}
