import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import useRoute from "./screens/router/router";
import { NavigationContainer } from "@react-navigation/native";
export let customFonts = {
  "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const routing = useRoute();
  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  };
  useEffect(() => {
    loadFontsAsync();
  }, []);
  if (!fontsLoaded) {
    loadFontsAsync();
    return null;
  }
  return <NavigationContainer>{routing}</NavigationContainer>;
}
