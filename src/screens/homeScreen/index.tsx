import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const HomeScreen: React.FC = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.fundo}>
            <Text style={styles.titulo}>Bem vindo!</Text>

            <TouchableOpacity 
                // @ts-ignore
                onPress={() => navigation.navigate("Calculator")}
                style={styles.botao}
                >
                <Text
                    style={styles.textoBotao}
                    >
                        Calculadora
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;