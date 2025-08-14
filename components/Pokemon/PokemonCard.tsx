import { StyleSheet, View, Text, Platform, Image, Pressable, Modal } from "react-native";
import { getTypeDetails } from "./Utils";
import { useState } from "react";

export default function PokemonCard({ name = "", image = require("../../assets/images/pikachu.png"), type = "", hp = 0, moves = [""], weakness = [""] }) {
    const { borderColor, emoji } = getTypeDetails(type)
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Pressable
            onPress={() => setModalVisible(true)}>
            <View style={styles.card}>
                <View style={styles.firstContainer}>
                    <Image source={image} style={styles.image} accessibilityLabel={`${name} pokemon`} />
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalFirstContainer}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.hp}>❤️{hp}</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image source={image} style={styles.modalImage} accessibilityLabel={`${name} pokemon`} />
                        </View>
                        <View style={styles.secondContainer}>
                            <View style={[styles.innerSecondContainer, { borderColor: borderColor }]}>
                                <Text>{emoji}</Text>
                                <Text style={{ color: borderColor }}>{type}</Text>
                            </View>
                        </View>
                        <View>
                            <Text>When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.</Text>
                        </View>
                        <View>
                            <Text style={styles.boldText}>Moves</Text>
                            <View style={styles.moveContainer}>
                                {moves.map((move, index) => <Text style={[styles.move, { backgroundColor: borderColor }]} key={index}>{move}</Text>)}
                            </View>
                        </View>
                        <View>
                            <Text style={styles.boldText}>Weakness</Text>
                            <View style={styles.moveContainer}>
                                {weakness.map((weak, index) => <Text style={[styles.move, { backgroundColor: "red" }]} key={index}>{weak}</Text>)}
                            </View>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f5f5f5",
        padding: 9,
        margin: 9,
        gap: 10,
        borderRadius: 16,
        ...Platform.select({
            android: {
                elevation: 10
            },
            ios: {
                //ios code
            }
        }),
        width: 150,
        height: 150
    },
    firstContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        fontSize: 18,
        fontWeight: "bold"
    },
    hp: {
        fontSize: 20
    },
    image: {
        width: "100%",
        height: 90,
        resizeMode: "contain"
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: 'center'
    },
    modalImage: {
        height: 150,
        width: 150,
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        gap: 10
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalFirstContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    moveContainer: {
        gap: 5,
        flexDirection: "row",
        flexWrap: "wrap",

    },
    move: {
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 4,
        fontWeight: "600"
    }
})