import { StyleSheet } from "react-native";

const myStyles = StyleSheet.create({
  whiteBackground: {
    backgroundColor: "white",
    flex: 1,
  },

  container: {
    marginHorizontal: 25,
  },
  avatar: {
    height: 300,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pictureContainer: {
    height: 170,
    width: 170,
    borderRadius: 85,
    borderColor: "red",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarPicture: {
    height: 150,
    width: 150,
    resizeMode: "cover",
    borderRadius: 75,
  },
  inputs: {},
  textInputs: {},
});

export default myStyles;
