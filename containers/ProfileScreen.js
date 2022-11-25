import {
  Text,
  View,
  Button,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

import nobody from "../assets/Unknown_person.jpg";

import myStyles from "../styles/profileScreenStyle";

export default function ProfileScreen({ setUser, userToken, userId }) {
  // STATES
  const [isLoading, setIsLoading] = useState(true);
  const [avatar, setAvatar] = useState(nobody);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");

  //Init
  const styles = useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await axios.get(
          `https://express-airbnb-api.herokuapp.com/user/${userId}`,
          {
            headers: { Authorization: `Bearer ${userToken}` },
          }
        );
        // console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        alert("un probleme est survenu dans la récupération des données");
      }
    };
    loadProfile();
  }, []);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" style={{ marginTop: 30 }} />
      ) : (
        <ScrollView style={myStyles.whiteBackground}>
          <View style={myStyles.container}>
            <View style={myStyles.avatar}>
              <View style={myStyles.pictureContainer}>
                <Image style={myStyles.avatarPicture} source={avatar} />
              </View>
            </View>
            <View style={myStyles.inputs}>
              <TextInput
                style={myStyles.textInput}
                placeholder="Email"
                onChangeText={(text) => {
                  setEmail(text);
                }}
                value={email}
                autoCapitalize="none"
              />
              <TextInput
                style={myStyles.textInput}
                placeholder="User Name"
                onChangeText={(text) => {
                  setUserName(text);
                }}
                value={userName}
              />
            </View>
            <Button
              title="Log Out"
              onPress={() => {
                setUser(null);
              }}
            />
          </View>
        </ScrollView>
      )}
    </>
  );
}
