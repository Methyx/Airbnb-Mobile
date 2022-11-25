import { View, Text, Button, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import axios from "axios";

const AroundMe = ({ navigation }) => {
  // STATES
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [coords, setCoords] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const askPermissionAndLoadData = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const position = await Location.getCurrentPositionAsync({});
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setIsAuthorized(true);
        let url = "https://express-airbnb-api.herokuapp.com/rooms/around";
        // !!! on ne transmet pas les coordonnées réelles pour avoir toutes les annonces !!!
        // url += "?latitude=" + position.coords.latitude;
        // url += "&longitude=" + position.coords.longitude;
        try {
          const response = await axios.get(url);
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      } else {
        setIsAuthorized(false);
        setIsLoading(false);
      }
    };
    askPermissionAndLoadData();
  }, []);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" style={{ marginTop: 30 }} />
      ) : !isAuthorized ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ marginVertical: 25 }}>
            Sans l'autorisation d'accéder à vos coordonnées, vous ne pouvez pas
            accéder à cette page
          </Text>
          <Button
            title="Retour à la page d'accueil"
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
        </View>
      ) : (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: Number(coords.latitude),
            longitude: Number(coords.longitude),
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
        >
          {data.map((item, index) => {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: Number(item.location[1]),
                  longitude: Number(item.location[0]),
                }}
                title={item.title}
                description={item.description}
                onPress={() => {
                  navigation.navigate("Room", { offerId: item._id });
                }}
              />
            );
          })}
        </MapView>
      )}
    </>
  );
};
export default AroundMe;
