import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  offerPrice: {
    fontSize: 22,
    width: 90,
    padding: 8,
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    position: "absolute",
    top: 240,
    left: 0,
  },
  bottom: {
    flexDirection: "row",
    height: 100,
    alignItems: "center",
    marginHorizontal: 10,
  },
  left: {
    flex: 4,
  },
  right: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "flex-start",
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
  description: {
    marginHorizontal: 10,
  },
  showMore: {
    color: "grey",
  },
});

export default styles;
