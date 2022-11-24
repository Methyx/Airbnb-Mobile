import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import styles from "../styles/miniOfferStyle";

const MiniOffer = ({ offer }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < offer.ratingValue) {
      stars.push({ id: offer._id.toString() + i.toString(), color: "gold" });
    } else {
      stars.push({ id: offer._id.toString() + i.toString(), color: "gray" });
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
            <View>
              <FlatList
                data={stars}
                keyExtractor={(item) => item.id}
                horizontal={true}
                // style={{ backgroundColor: "purple" }}
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
    </TouchableOpacity>
  );
};

export default MiniOffer;
