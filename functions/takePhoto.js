import * as ImagePicker from "expo-image-picker";

const takePhoto = async (setAvatar) => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status === "granted") {
    const result = await ImagePicker.launchCameraAsync();
    if (result.canceled === true) {
      alert("Pas de photo sélectionnée");
    } else {
      setAvatar(result.assets[0].uri);
    }
  } else {
    alert("Impossible sans l'autorisation d'accéder à votre galerie");
    return;
  }
};

export default takePhoto;
