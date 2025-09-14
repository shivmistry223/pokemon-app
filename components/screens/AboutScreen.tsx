import { Button, StyleSheet, Text, View } from "react-native";

export default function AboutScreen({ navigation, route }) {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text>About {name}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Go back to Main"
        onPress={() => navigation.setParams({ name: "Guest" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
