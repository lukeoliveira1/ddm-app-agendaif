import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import Home from "./src/screens/Home";
import { theme } from "./src/theme/light";
import TaskRegistration from "./src/screens/TaskRegistration";
import TaskList from "./src/screens/TaskList";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar animated={true} backgroundColor={theme.colors.primary} />
      {/* <Home /> */}
      {/* <TaskRegistration /> */}
      <TaskList />
    </ThemeProvider>
  );
}
