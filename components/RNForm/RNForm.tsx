import { useState } from "react";
import { Button, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Switch, Text, TextInput, View } from "react-native";

export default function RNForm() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [graduate, setGraduate] = useState(false)
    const [errors, setErrors] = useState({ name: "", password: "" })

    const validateForm = () => {
        let error = {}

        // if (!name) error.name = "Name is Required!"
        // if (!password) error.password = "Password is required!"

        // setErrors(error)

        return Object.keys(error).length === 0

    }
    const onSubmit = () => {
        if (validateForm()) {
            console.log(name, password)
            setName("")
            setPassword("")
            setErrors({ name: "", password: "" })
        }
    }
    return (
        // <KeyboardAvoidingView behavior="padding" style={styles.container}>
        // <ScrollView>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>React native Form</Text>
            </View>

            <View style={styles.formContainer}>
                {/* <Image source={require("../../assets/images/pikachu.png")} style={styles.image} /> */}
                <View>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.textInput} value={name} onChangeText={setName} placeholder="Enter Your Name" />
                    {errors.name ? <Text style={styles.textError}>{errors.name}</Text> : null}
                </View>
                <View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.textInput} value={password} onChangeText={setPassword} placeholder="Enter Your Password" secureTextEntry />
                    {errors.password ? <Text style={styles.textError}>{errors.password}</Text> : null}

                </View>
                <View>
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={[styles.textInput, styles.multiline]} value={address} onChangeText={setAddress} multiline placeholder="Enter Your Address" />
                </View>
                <View>
                    <Text style={styles.label}>Graduated</Text>
                    <Switch value={graduate} onValueChange={() => setGraduate(!graduate)}
                        trackColor={{ true: "lightblue", false: "#767577" }}
                        thumbColor="#f3f3f4"
                    />
                </View>
                <View><Button title="Login" onPress={onSubmit} /></View>
            </View>
        </View>
        // </ScrollView>
        // </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 10,
        gap: 10
    },
    mainContainer: {
        flex: 1,

    },
    textInput: {
        borderWidth: 0.5,
        padding: 8,
        borderRadius: 4
    },
    multiline: {
        minHeight: 100,
        textAlignVertical: "top"
    },
    header: {
        width: "100%",
        backgroundColor: "yellow",
        padding: 10,
        alignItems: "center",
        borderRadius: 10,
        elevation: 4
    },
    formContainer: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        // for ios
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        // for android
        elevation: 6,
        gap: 15
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "bold"
    },
    image: {
        height: 300,
        width: 300,
        alignSelf: "center"
    },
    textError: {
        color: "red",
        marginBottom: 5
    }
})