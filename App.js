import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { RegistrationScreen } from "./screens/RegistrationScreen";
import { LoginScreen } from "./screens/LoginScreen";

export let customFonts = {
  "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

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

  return (
    // <RegistrationScreen />
    <LoginScreen />
  );
}
