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

import handleSubmitSignIn from "../functions/handleSubmitSignIn";

import styles from "../styles/signInStyle";

export default function SignInScreen({ setToken }) {
  const navigation = useNavigation();

  //STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ message: "", color: "" });
  const [isBusy, setIsBusy] = useState(false);

  return (
    <KeyboardAwareScrollView>
      <View style={styles.top}>
        <Image
          style={styles.logo}
          source={require("../assets/logoAirbnb.png")}
        />
        <Text style={styles.title}>Sign in</Text>
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(email) => {
            setEmail(email);
          }}
          value={email}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => {
            setPassword(password);
          }}
          value={password}
          autoCapitalize="none"
        />
        {/* {message.message && ( */}
        <Text
          style={{
            color: message.color,
            textAlign: "center",
            marginVertical: 10,
            fontWeight: "bold",
          }}
        >
          {message.message}
        </Text>
        {/* )} */}
        {isBusy ? (
          <ActivityIndicator size="large" style={{ marginTop: 30 }} />
        ) : (
          <>
            <TouchableOpacity
              style={styles.submit}
              onPress={() => {
                handleSubmitSignIn(
                  email,
                  password,
                  setMessage,
                  setIsBusy,
                  setToken
                );
              }}
            >
              <Text style={styles.submitText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={styles.link}>No account ? Register</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
}
