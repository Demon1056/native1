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
import { Ionicons } from "@expo/vector-icons";

const RegistrationScreen = ({ navigation, authorization }) => {
  const [isLoginFocus, setIsLoginFocus] = useState(false);
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [isPasswordFocus, setIsPassowrdFocus] = useState(false);

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isntShowPassword, setIsntShowPassword] = useState(true);

  const registrationData = { ...login, ...email, ...password };

  const resetForm = () => {
    setEmail(""), setPassword(""), setLogin("");
  };
  const hideKeyboard = () => Keyboard.dismiss();

  const handleSubmit = () => {
    if (registrationData) {
      {
        authorization(true);
      }
    }
    resetForm();
  };
  const checkInputFocus = () =>
    !isEmailFocus && !isLoginFocus && !isPasswordFocus;

  const toggleShowPassword = () => {
    isntShowPassword ? setIsntShowPassword(false) : setIsntShowPassword(true);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <ImageBackground
          source={require("../../assets/images/photobg.jpg")}
          style={styles.bgImage}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.formContainer}>
              <View>
                <View style={styles.fotoPlace}>
                  <TouchableOpacity style={styles.addPictureButton}>
                    <Ionicons
                      name="add-circle-outline"
                      size={25}
                      color="#FF6C00"
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.formTitle}>Регистрация</Text>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isLoginFocus ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder={"Логин"}
                  placeholderTextColor={"#BDBDBD"}
                  onFocus={() => setIsLoginFocus(true)}
                  onBlur={() => setIsLoginFocus(false)}
                  onChangeText={(value) => setLogin({ login: value })}
                  value={login}
                />
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
                      <Text style={styles.btnText}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Login");
                      }}
                    >
                      <Text style={styles.bottomText}>
                        Уже есть аккаунт? Войти
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

export default RegistrationScreen;
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
    backgroundColor: "FFFFFF",
  },
  fotoPlace: {
    width: 120,
    height: 120,
    position: "relative",
    marginBottom: 32,
    marginTop: -66,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addPictureButton: {
    position: "absolute",
    bottom: 6,
    right: -12,
  },
  formTitle: {
    marginBottom: 32,
    textAlign: "center",
    color: "#212121",
    fontFamily: "Roboto-Bold",
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
  showOrHidePasswordButton: {
    position: "absolute",
    top: 300,
    right: 32,
  },
  submitButton: {
    height: 51,
    marginBottom: 16,
    marginTop: 27,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  btnText: {
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  bottomText: {
    marginBottom: 45,
    textAlign: "center",
    color: `#1B4371`,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
});
