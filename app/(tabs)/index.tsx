import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text } from "react-native";
import RNNetwork from "@/components/RNNetwork/RNNetwork";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/components/screens/HomeScreen";
import AboutScreen from "@/components/screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{ name: "Guest" }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
    backgroundColor: "black",
  },
});
