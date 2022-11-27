import axios from "axios";

const saveProfile = async (
  userId,
  userToken,
  setIsLoading,
  avatar,
  email,
  userName,
  description
) => {
  try {
    setIsLoading(true);
    //sauvegarde des données
    const url1 = "https://express-airbnb-api.herokuapp.com/user/update";
    const response = await axios.put(
      url1,
      {
        email: email,
        username: userName,
        description: description,
      },
      {
        headers: { Authorization: `Bearer ${userToken}` },
      }
    );
    // console.log(response.data);
    //sauvegarde de la photo
    if (avatar) {
      const url2 =
        "https://express-airbnb-api.herokuapp.com/user/upload_picture";
      const formData = new FormData();
      const tab = avatar.split(".");
      formData.append("photo", {
        uri: avatar,
        name: `avatar${userId}.${tab[1]}`,
        type: `image/${tab[1]}`,
      });
      const response = await axios.put(url2, formData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    }
    // ok
    alert("Sauvegarde effectuée !");
    setIsLoading(false);
  } catch (error) {
    console.log(error.message);
    console.log(error.response?.data);
    if (error.response?.data.error.includes("already used")) {
      alert("email et/ou username déjà utilisés");
    } else {
      alert("Désolé, un problème est survenu");
    }
    setIsLoading(false);
  }
};

export default saveProfile;
