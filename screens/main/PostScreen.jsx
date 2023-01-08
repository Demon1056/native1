import { View, Text, StyleSheet } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.informationArea}>
      <View style={styles.fotoArea} />
      <View>
        <Text style={styles.nameInformation}>Name</Text>
        <Text style={styles.mailInformation}>Adress</Text>
      </View>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  fotoArea: {
    marginRight: 8,
    width: 60,
    height: 60,
    backgroundColor: "#FF6C00",
    borderRadius: 16,
  },
  informationArea: {
    height: 60,
    marginTop: 31,
    flexDirection: "row",
    alignItems: "center",
  },
  nameInformation: {
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  mailInformation: {
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
