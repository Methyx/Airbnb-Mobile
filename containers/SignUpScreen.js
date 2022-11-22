import { useNavigation } from "@react-navigation/core";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";

import handleSubmitSignUp from "../functions/handleSubmitSignUp";

import styles from "../styles/signUp";
export default function SignUpScreen({ setToken }) {
  const navigation = useNavigation();

  //STATES
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState({ message: "", color: "" });
  const [isBusy, setIsBusy] = useState(false);

  return (
    <KeyboardAwareScrollView>
      <View style={styles.top}>
        <Image
          style={styles.logo}
          source={require("../assets/logoAirbnb.png")}
        />
        <Text style={styles.title}>Register</Text>
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(email) => {
            setEmail(email);
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="UserName"
          onChangeText={(userName) => {
            setUserName(userName);
          }}
        />
        <TextInput
          style={styles.textAreaInput}
          multiline={true}
          numberOfLines={4}
          placeholder="Describe yourself in few words ..."
          onChangeText={(description) => {
            setDescription(description);
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => {
            setPassword(password);
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={(password2) => {
            setPassword2(password2);
          }}
        />
        {message.message && (
          <Text
            style={{
              color: message.color,
              textAlign: "center",
              marginTop: 30,
              fontWeight: "bold",
            }}
          >
            {message.message}
          </Text>
        )}
        {isBusy ? (
          <ActivityIndicator size="large" style={{ marginTop: 30 }} />
        ) : (
          <>
            <TouchableOpacity
              style={styles.submit}
              onPress={() => {
                handleSubmitSignUp(
                  email,
                  userName,
                  description,
                  password,
                  password2,
                  setMessage,
                  setIsBusy,
                  setToken
                );
              }}
            >
              <Text style={styles.submitText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              <Text style={styles.link}>Already have an account ? Sign In</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
}
