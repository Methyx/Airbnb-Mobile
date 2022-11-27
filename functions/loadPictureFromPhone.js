import * as ImagePicker from "expo-image-picker";

const loadPictureFromPhone = async (setAvatar) => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status === "granted") {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });
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

export default loadPictureFromPhone;
