import { Text, View, Button } from "react-native";

export default function ProfileScreen({ setToken }) {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        title="Log Out"
        onPress={() => {
          setToken(null);
        }}
      />
    </View>
  );
}
