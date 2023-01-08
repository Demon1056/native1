import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../auth/RegistrationScreen";
import LoginScreen from "../auth/LoginScreen";
import { StyleSheet } from "react-native";
import Home from "../main/HomeScreen";
import { useState } from "react";

const AuthStack = createStackNavigator();

const useRoute = () => {
  const [isLogin, setIsLogin] = useState(false);
  const changeIsLogin = (value) => setIsLogin(value);
  if (!isLogin) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          name="Registration"
          options={{ headerShown: false }}
          component={(props) => (
            <RegistrationScreen {...props} authorization={changeIsLogin} />
          )}
        />
        <AuthStack.Screen
          name="Login"
          component={(props) => (
            <LoginScreen {...props} authorization={changeIsLogin} />
          )}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }
  return <Home logOut={changeIsLogin} />;
};

export default useRoute;
