import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import styles from "../styles/miniOfferStyle";

const MiniOffer = ({ offer }) => {
  const yellowStars = [];
  const grayStars = [];
  for (let i = 0; i < 5; i++) {
    if (i < offer.ratingValue) {
      yellowStars.push(offer._id.toString() + i.toString());
    } else {
      grayStars.push(offer._id.toString() + i.toString());
    }
  }
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.miniOfferContainer}
      onPress={() => {
        navigation.navigate("Room", { offerId: offer._id });
      }}
    >
      <View style={styles.pictureContainer}>
        <Image
          source={{ uri: offer.photos[0].url }}
          style={styles.mainPicture}
        />
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
                // style={{ backgroundColor: "purple" }}
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
    </TouchableOpacity>
  );
};

export default MiniOffer;
