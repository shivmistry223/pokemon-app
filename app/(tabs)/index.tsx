import React from "react";
import PokemonMain from "@/components/Pokemon/PokemonMain";
import { Platform, SafeAreaView, StyleSheet } from "react-native";

export default function Index() {

  return (
    <SafeAreaView style={styles.container}>
      <PokemonMain />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 40 : 0
  }
})
