import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const hideKeyboard = () => Keyboard.dismiss();

const CreatePostsScreen = () => {
  const [isFocusFotoTittle, setIsFocusFotoTittle] = useState(false);
  return (
    <View>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.fotoArea}>
            <View style={styles.fotoIconArea}>
              <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
            </View>
          </View>
          <Text style={styles.fotoAction}>Загрузите фото</Text>
          <TextInput
            style={{
              ...styles.input,
              fontWeight: isFocusFotoTittle ? "500" : "400",
            }}
            placeholder={"Название..."}
            placeholderTextColor={"#BDBDBD"}
            onFocus={() => setIsFocusFotoTittle(true)}
            onBlur={() => setIsFocusFotoTittle(false)}
          />
          <View>
            <EvilIcons
              name="location"
              size={24}
              color="#BDBDBD"
              style={styles.locationArea}
            />
            <TextInput
              style={{ ...styles.input, paddingLeft: 17 }}
              placeholder={"Месность..."}
              placeholderTextColor={"#BDBDBD"}
            />
          </View>

          <View>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.btnText}>Войти</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CreatePostsScreen;
const styles = StyleSheet.create({
  fotoArea: {
    with: 343,
    height: 240,
    marginTop: 32,
    marginBottom: 8,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
  },
  fotoAction: {
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 32,
  },
  input: {
    height: 50,
    marginBottom: 16,
    paddingVertical: 16,
    color: "#212121",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  submitButton: {
    height: 51,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    // backgroundColor: "#FF6C00",
    backgroundColor: "#F6F6F6",
  },
  btnText: {
    // color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  fotoIconArea: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  locationArea: {
    position: "absolute",
    top: 14,
    left: -5,
  },
});
