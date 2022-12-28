import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { ThemeProvider } from "styled-components";
import theme from "./src/theme";

import { StatusBar } from "react-native";
import { Groups } from "@screens/Groups";
import { Loading } from "@components/Loading";

export default function App() {
  const [fonstLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      {fonstLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
