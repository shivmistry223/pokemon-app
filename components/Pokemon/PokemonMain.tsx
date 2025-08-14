import { Image, ScrollView, StyleSheet, View } from "react-native";
import PokemonCard from "./PokemonCard";
import { pokemonLogo, pokemonDataArray } from "./constant"

export default function PokemonMain() {

    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <Image style={styles.image} source={pokemonLogo} />
            </View>
            <ScrollView>
                <View style={styles.secondContainer}>
                    {pokemonDataArray.map((pokemon, index) => <PokemonCard key={index} {...pokemon} />)}
                    {pokemonDataArray.map((pokemon, index) => <PokemonCard key={index} {...pokemon} />)}
                </View>
            </ScrollView>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        gap: 10,
        flexWrap: "wrap"
    },
    firstContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        margin: 10
    },
    secondContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    image: {
        width: "100%",
        height: 60,
        resizeMode: "contain"
    }
})