import axios from "axios";

const handleSubmitSignUp = async (
  email,
  userName,
  description,
  password,
  password2,
  setMessage,
  setIsBusy,
  setToken
) => {
  setMessage({ message: "", color: "black" });
  if (!password || !email || !userName || !description) {
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
  if (password !== password2) {
    setMessage({
      message: "Vos 2 mots de passe doivent être identiques",
      color: "darkmagenta",
    });
    return;
  }
  // requete axios
  setIsBusy(true);
  try {
    const response = await axios.post(
      "https://express-airbnb-api.herokuapp.com/user/sign_up",
      {
        email: email,
        username: userName,
        description: description,
        password: password,
      }
    );
    // console.log(response.data);
    alert("Inscription effectuée. Merci !");
    setToken(response.data.token);
    setIsBusy(false);
    setMessage({
      message: `Bienvenue ${response.data.username}`,
      color: "darkgreen",
    });
  } catch (error) {
    setIsBusy(false);
    if (error.response?.data.error.includes("already has an account")) {
      setMessage({
        message: error.response.data.error,
        color: "red",
      });
    } else {
      setMessage({ message: error.message, color: "red" });
    }
  }
};

export default handleSubmitSignUp;
