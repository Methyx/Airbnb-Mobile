import { View, Image } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../assets/logoAirbnb.png")}
        style={{ width: 45, height: 45 }}
      />
    </View>
  );
};

export default Header;
