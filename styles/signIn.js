import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  top: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    marginTop: 20,
    width: "70%",
    height: 180,
    resizeMode: "contain",
  },
  title: {
    fontSize: 25,
    color: "grey",
  },
  textInput: {
    fontSize: 16,
    padding: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "red",
  },
  submit: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  submitText: {
    fontSize: 20,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 30,
  },
  link: {
    marginTop: 15,
    textAlign: "center",
  },
});

export default styles;
