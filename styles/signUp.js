import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  top: {
    width: "100%",
    alignItems: "center",
    marginBottom: 5,
  },
  logo: {
    marginTop: 10,
    width: "70%",
    height: 120,
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
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "red",
  },
  textAreaInput: {
    fontSize: 16,
    padding: 10,
    height: 100,
    marginHorizontal: 60,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "red",
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
    marginTop: 5,
    textAlign: "center",
  },
});

export default styles;
