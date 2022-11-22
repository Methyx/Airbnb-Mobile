import axios from "axios";

const handleSubmitSignIn = async (
  email,
  password,
  setMessage,
  setIsBusy,
  setToken
) => {
  setMessage({ message: "", color: "black" });
  if (!password || !email) {
    setMessage({
      message: "Veuillez renseignez tous les champs, SVP",
      color: "coral",
    });
    return;
  }
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(mailFormat)) {
    setMessage({
      message: "Email Invalide",
      color: "darkmagenta",
    });
    return;
  }
  // requete axios
  setIsBusy(true);
  try {
    const response = await axios.post(
      "https://express-airbnb-api.herokuapp.com/user/log_in",
      {
        email: email,
        password: password,
      }
    );
    // console.log(response.data);
    setToken(response.data.token);
    setIsBusy(false);
    setMessage({
      message: `Bienvenue ${response.data.username}`,
      color: "darkgreen",
    });
  } catch (error) {
    setIsBusy(false);
    if (error.message.includes("code 401")) {
      setMessage({
        message: "login refusé avec ces identifiants",
        color: "red",
      });
    } else {
      setMessage({ message: error.message, color: "red" });
    }
  }
};

export default handleSubmitSignIn;
