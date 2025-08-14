import { Image, ScrollView, StyleSheet, View } from "react-native";
import PokemonCard from "./PokemonCard";


export default function PokemonMain() {
    const pikachuImg = require("../../assets/images/pikachu.png")
    const pokemonLogo = require("../../assets/images/pokemon_logo.png")
    const pokemonDataArray = [
        {
            name: "Pikachu",
            image: pikachuImg,
            type: "Electric",
            hp: 35,
            moves: ["Thunder Shock", "Quick Attack"],
            weakness: ["Ground"]
        },
        {
            name: "Charmander",
            image: require("../../assets/images/charmander.png"),
            type: "Fire",
            hp: 39,
            moves: ["Ember", "Scratch"],
            weakness: ["Water", "Rock", "Ground"]
        },
        {
            name: "Bulbasaur",
            image: require("../../assets/images/bulbasaur.png"),
            type: "Grass",
            hp: 45,
            moves: ["Vine Whip", "Tackle"],
            weakness: ["Fire", "Ice", "Flying", "Psychic"]
        },
        {
            name: "Squirtle",
            image: require("../../assets/images/squirtle.png"),
            type: "Water",
            hp: 44,
            moves: ["Water Gun", "Tackle"],
            weakness: ["Electric", "Grass"]
        },
        {
            name: "Eevee",
            image: require("../../assets/images/eevee.png"),
            type: "Normal",
            hp: 55,
            moves: ["Quick Attack", "Bite"],
            weakness: ["Fighting"]
        }
    ];

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.firstContainer}>
                    <Image style={styles.image} source={pokemonLogo} />
                </View>
                {pokemonDataArray.map((pokemon, index) => <PokemonCard key={index} {...pokemon} />)}
            </View>
        </ScrollView>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        gap: 10
    },
    firstContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        margin: 10
    },
    image: {
        width: "100%",
        height: 60,
        resizeMode: "contain"
    }
})