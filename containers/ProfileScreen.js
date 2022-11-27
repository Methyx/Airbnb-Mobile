import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";

// functions
import loadProfile from "../functions/loadProfile";
import saveProfile from "../functions/saveProfile";
import loadPictureFromPhone from "../functions/loadPictureFromPhone";
import takePhoto from "../functions/takePhoto";

// image
import nobody from "../assets/Unknown_person.jpg";
// style
import myStyles from "../styles/profileScreenStyle";

export default function ProfileScreen({ setUser, userToken, userId }) {
  // STATES
  const [isLoading, setIsLoading] = useState(true);
  const [avatar, setAvatar] = useState(null);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");

  //USE EFFECT
  useEffect(() => {
    loadProfile(
      userId,
      userToken,
      setIsLoading,
      setAvatar,
      setEmail,
      setUserName,
      setDescription
    );
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
                {avatar ? (
                  <Image
                    style={myStyles.avatarPicture}
                    source={{ uri: avatar }}
                  />
                ) : (
                  <Image style={myStyles.avatarPicture} source={nobody} />
                )}
              </View>
              <View style={myStyles.icons}>
                <MaterialIcons
                  name="add-photo-alternate"
                  size={44}
                  color="gray"
                  style={{ marginBottom: 20 }}
                  onPress={() => {
                    loadPictureFromPhone(setAvatar);
                  }}
                />

                <MaterialIcons
                  name="add-a-photo"
                  size={40}
                  color="gray"
                  onPress={() => {
                    takePhoto(setAvatar);
                  }}
                />
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
              <TextInput
                style={myStyles.textAreaInput}
                multiline={true}
                numberOfLines={4}
                placeholder="Describe yourself in few words ..."
                onChangeText={(description) => {
                  setDescription(description);
                }}
                value={description}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={myStyles.touchableButton}
                onPress={() => {
                  saveProfile(
                    userId,
                    userToken,
                    setIsLoading,
                    avatar,
                    email,
                    userName,
                    description
                  );
                }}
              >
                <Text>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={myStyles.touchableButton2}
                onPress={() => {
                  setUser(null);
                }}
              >
                <Text>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
}
