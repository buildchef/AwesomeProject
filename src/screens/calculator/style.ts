import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    fundo: {
        backgroundColor: "#ebf4f5",
        width: "100%",
        height: "100%",
        alignContent: "center",
        alignItems: "center",
        padding: 20,
        justifyContent: "space-between"
    },
    labelTexto: {
        backgroundColor: "#7d8f91",
        width: "100%",
        borderRadius: 20,
        borderWidth: 5,
        borderColor: "#a9bfc2",
        padding: 10
    },
    textoDigitado: {
        color: "#ffff",
        fontSize: 40,
    },
    botoes: {
        flexDirection: "row",
        alignItems: "center",
    }
});

export default style;