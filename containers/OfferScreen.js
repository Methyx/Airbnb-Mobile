import axios from "axios";
import {
  Text,
  View,
  Image,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

import styles from "../styles/offerStyle";

const Room = () => {
  const route = useRoute();
  const [offer, setOffer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://express-airbnb-api.herokuapp.com/rooms/" +
          String(route.params.offerId);
        const response = await axios.get(url);
        setOffer(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  //Init
  const stars = [];
  const photos = [];
  if (offer) {
    for (let i = 0; i < 5; i++) {
      if (i < offer.ratingValue) {
        stars.push({ id: offer._id.toString() + i.toString(), color: "gold" });
      } else {
        stars.push({ id: offer._id.toString() + i.toString(), color: "gray" });
      }
    }
    for (let i = 0; i < offer.photos.length; i++) {
      photos.push({
        id: offer.photos.picture_id,
        image: offer.photos[i].url,
      });
    }
  }

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" style={{ marginTop: 30 }} />
      ) : (
        <>
          <View style={styles.imageContainer}>
            <SwiperFlatList
              data={photos}
              renderItem={({ item }) => (
                <Image
                  style={styles.image}
                  source={{ uri: item.image }}
                ></Image>
              )}
              showPagination
            />
            <Text style={styles.offerPrice}>{offer.price} €</Text>
          </View>
          <View style={styles.bottom}>
            <View style={styles.left}>
              <Text style={styles.title} numberOfLines={1}>
                {offer.title}
              </Text>
              <View style={styles.rating}>
                <View>
                  <FlatList
                    data={stars}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    renderItem={({ item }) => (
                      <FontAwesome name="star" size={24} color={item.color} />
                    )}
                  />
                </View>
                <Text style={styles.reviews}>{offer.reviews} reviews</Text>
              </View>
            </View>
            <View style={styles.right}>
              <Image
                source={{ uri: offer.user.account.photo.url }}
                style={styles.avatar}
              />
            </View>
          </View>
          <View style={styles.description}>
            <Text numberOfLines={showMore ? 3 : 0}>{offer.description}</Text>
            {showMore ? (
              <TouchableOpacity
                onPress={() => {
                  setShowMore(false);
                }}
              >
                <Text style={styles.showMore}>
                  show more{" "}
                  <AntDesign
                    style={styles.showMore}
                    name="caretdown"
                    size={12}
                    color="black"
                  />{" "}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setShowMore(true);
                }}
              >
                <Text style={styles.showMore}>
                  show less{" "}
                  <AntDesign
                    style={styles.showMore}
                    name="caretup"
                    size={12}
                    color="black"
                  />{" "}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <View>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 48.856614,
                longitude: 2.3522219,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}
            >
              <Marker
                coordinate={{
                  latitude: offer.location[1],
                  longitude: offer.location[0],
                }}
                title={offer.title}
                description={offer.description}
              />
            </MapView>
          </View>
        </>
      )}
    </>
  );
};
export default Room;
