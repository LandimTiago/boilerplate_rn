import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>About screen</Text>

      <Button title="Splash" onPress={() => navigation.navigate("Splash")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
