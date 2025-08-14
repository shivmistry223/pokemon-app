import { StyleSheet, View, Text, Platform, Image } from "react-native";
import { getTypeDetails } from "./Utils";

export default function PokemonCard({ name = "", image = require("../../assets/images/pikachu.png"), type = "", hp = 0, moves = [""], weakness = [""] }) {
    const { borderColor, emoji } = getTypeDetails(type)
    return (
        <View style={styles.card}>
            <View style={styles.firstContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>❤️{hp}</Text>
            </View>
            <Image source={image} style={styles.image} accessibilityLabel={`${name} pokemon`} />
            <View style={styles.secondContainer}>
                <View style={[styles.innerSecondContainer, { borderColor: borderColor }]}>
                    <Text>{emoji}</Text>
                    <Text style={{ color: borderColor }}>{type}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.boldText}>Moves: {moves.join(",")}</Text>
            </View>
            <View>
                <Text style={styles.boldText}>Weakness: {weakness.join(",")}</Text>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f5f5f5",
        padding: 16,
        margin: 16,
        gap: 10,
        borderRadius: 16,
        ...Platform.select({
            android: {
                elevation: 10
            },
            ios: {
                //ios code
            }
        })
    },
    firstContainer: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
    },
    name: {
        fontSize: 28,
        fontWeight: "bold"
    },
    hp: {
        fontSize: 20
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "contain"
    },
    secondContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        width: "100%"
    },
    innerSecondContainer: {
        flexDirection: "row",
        gap: 5,
        borderRadius: 14,
        borderWidth: 1,
        backgroundColor: "white",
        padding: 5,
        ...Platform.select({
            android: {
                elevation: 6
            }
        })

    },
    boldText: {
        fontWeight: "bold",
        fontSize: 18,

    },
})