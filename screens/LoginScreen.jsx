import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export const LoginScreen = () => {
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [isPasswordFocus, setIsPassowrdFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isntShowPassword, setIsntShowPassword] = useState(true);

  const enterData = { ...email, ...password };

  const resetForm = () => {
    setEmail(""), setPassword("");
  };
  const hideKeyboard = () => Keyboard.dismiss();

  const handleSubmit = () => {
    console.log(enterData), resetForm();
  };
  const checkInputFocus = () => !isEmailFocus && !isPasswordFocus;

  const toggleShowPassword = () => {
    isntShowPassword ? setIsntShowPassword(false) : setIsntShowPassword(true);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <ImageBackground
          source={require("../assets/images/photobg.jpg")}
          style={styles.bgImage}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.formContainer}>
              <View>
                <Text style={styles.formTitle}>Войти</Text>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isEmailFocus ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder={"Адрес электронной почты"}
                  placeholderTextColor={"#BDBDBD"}
                  onFocus={() => setIsEmailFocus(true)}
                  onBlur={() => setIsEmailFocus(false)}
                  onChangeText={(value) => setEmail({ email: value })}
                  value={email}
                />
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isPasswordFocus ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder={"Пароль"}
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={isntShowPassword}
                  onFocus={() => setIsPassowrdFocus(true)}
                  onBlur={() => setIsPassowrdFocus(false)}
                  onChangeText={(value) => setPassword({ password: value })}
                  value={password}
                />
                <TouchableOpacity
                  style={styles.showOrHidePasswordButton}
                  onPress={toggleShowPassword}
                >
                  <Text style={styles.showOrHidePasswordText}>
                    {isntShowPassword ? "Показать" : "Скрыть"}
                  </Text>
                </TouchableOpacity>
                {checkInputFocus() && (
                  <View>
                    <TouchableOpacity
                      style={styles.submitButton}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.btnText}>Войти</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.bottomText}>
                        Нет аккаунта? Зарегистрироваться
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  formContainer: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "white",
  },
  formTitle: {
    marginBottom: 32,
    marginTop: 32,
    textAlign: "center",
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 30,
    lineHeight: 35,
  },
  input: {
    height: 50,
    marginBottom: 16,
    marginHorizontal: 16,
    padding: 16,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  showOrHidePasswordText: {
    color: `#1B4371`,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  showOrHidePasswordButton: { position: "absolute", top: 182, right: 32 },
  submitButton: {
    height: 51,
    marginBottom: 16,
    marginTop: 27,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    fontFamily: "Roboto-Regular",
  },
  btnText: {
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  bottomText: {
    marginBottom: 111,
    textAlign: "center",
    color: `#1B4371`,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
});
