import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import {
  Button,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";

import styles from "../styles/homeStyle";

import MiniOffer from "./MiniOffer";

export default function HomeScreen() {
  // STATES
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  // Init
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://express-airbnb-api.herokuapp.com/rooms"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" style={{ marginTop: 30 }} />
      ) : (
        <View style={{ backgroundColor: "white" }}>
          <View style={styles.container}>
            <FlatList
              data={data}
              keyExtractor={(item) => {
                return String(item._id);
              }}
              renderItem={({ item }) => {
                return <MiniOffer offer={item} />;
              }}
            />
          </View>
        </View>
      )}
    </>
  );
}
