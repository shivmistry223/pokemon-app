import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import RNNetwork from "@/components/RNNetwork/RNNetwork";

export default function Index() {

  return (
    <SafeAreaView style={styles.container}>
      <RNNetwork />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 40 : 0
  }
})
