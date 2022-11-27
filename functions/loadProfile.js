import axios from "axios";

const loadProfile = async (
  userId,
  userToken,
  setIsLoading,
  setAvatar,
  setEmail,
  setUserName,
  setDescription
) => {
  try {
    const response = await axios.get(
      `https://express-airbnb-api.herokuapp.com/user/${userId}`,
      {
        headers: { Authorization: `Bearer ${userToken}` },
      }
    );
    // console.log(response.data);
    setEmail(response.data.email);
    setUserName(response.data.username);
    setDescription(response.data.description);
    if (response.data.photo) {
      setAvatar(response.data.photo.url);
    } else {
      setAvatar(null);
    }
    setIsLoading(false);
  } catch (error) {
    alert("un probleme est survenu dans la récupération des données");
  }
};

export default loadProfile;
