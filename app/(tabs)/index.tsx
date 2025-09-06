import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import RNForm from "@/components/RNForm/RNForm";

export default function Index() {

  return (
    <SafeAreaView style={styles.container}>
      <RNForm />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 40 : 0
  }
})
