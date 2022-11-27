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
    height: 220,
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
  icons: {
    marginHorizontal: 20,
  },
  inputs: {},
  textInput: {
    fontSize: 16,
    padding: 10,
    marginHorizontal: 40,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "red",
  },
  textAreaInput: {
    fontSize: 16,
    padding: 10,
    height: 100,
    marginHorizontal: 30,
    marginVertical: 30,
    borderWidth: 1,
    borderColor: "red",
  },
  touchableButton: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    height: 45,
    width: 200,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 30,
  },
  touchableButton2: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    height: 45,
    width: 200,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "lightgrey",
  },
});

export default myStyles;
