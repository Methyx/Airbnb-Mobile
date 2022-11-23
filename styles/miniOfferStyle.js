import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  miniOfferContainer: {
    height: 290,
    width: "100%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  pictureContainer: {
    position: "relative",
    width: "100%",
    height: "75%",
  },
  mainPicture: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  offerPrice: {
    fontSize: 22,
    width: 90,
    padding: 8,
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    position: "absolute",
    top: 150,
    left: 0,
  },
  bottom: {
    flexDirection: "row",
    height: "25%",
    alignItems: "center",
  },
  left: {
    flex: 4,
  },
  right: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviews: {
    color: "lightgray",
    marginHorizontal: 10,
  },
  avatar: {
    width: 65,
    height: 65,
    resizeMode: "cover",
    borderRadius: 30,
    marginTop: 10,
  },
});

export default styles;
