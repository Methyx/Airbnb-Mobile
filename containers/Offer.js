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
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

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

  const yellowStars = [];
  const grayStars = [];
  if (offer) {
    for (let i = 0; i < 5; i++) {
      if (i < offer.ratingValue) {
        yellowStars.push(offer._id.toString() + i.toString());
      } else {
        grayStars.push(offer._id.toString() + i.toString());
      }
    }
  }
  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" style={{ marginTop: 30 }} />
      ) : (
        <>
          <View style={styles.imageContainer}>
            <Image source={{ uri: offer.photos[0].url }} style={styles.image} />
            <Text style={styles.offerPrice}>{offer.price} €</Text>
          </View>
          <View style={styles.bottom}>
            <View style={styles.left}>
              <Text style={styles.title} numberOfLines={1}>
                {offer.title}
              </Text>
              <View style={styles.rating}>
                {yellowStars.length > 0 && (
                  <FlatList
                    data={yellowStars}
                    keyExtractor={(item) => `Yellow ${item}`}
                    horizontal={true}
                    renderItem={({ item }) => (
                      <FontAwesome name="star" size={24} color="gold" />
                    )}
                  />
                )}
                {grayStars.length > 0 && (
                  <FlatList
                    data={grayStars}
                    keyExtractor={(item) => `Gray ${item}`}
                    horizontal={true}
                    renderItem={({ item }) => (
                      <FontAwesome name="star" size={24} color="gray" />
                    )}
                  />
                )}
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
        </>
      )}
    </>
  );
};
export default Room;
