import { Text, TouchableOpacity } from "react-native"
import styles from "./style";
import { CalculatorStore } from "../../store/calculatorStore";
import { useNavigation } from "@react-navigation/native";

type ButtonCalculatorProps = {
    textoBotao: string,
    corBotao: string,
    operacao?: string
}

const ButtonCalculator: React.FC<ButtonCalculatorProps> = ({textoBotao, corBotao, operacao}) => {
    const {inputText, setTextoInput, clearTextoInput, permitirVirgula, setPermitirVirgula, historico} = CalculatorStore((state) => state);
    const navigation = useNavigation();


    const caracteres = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const operadores = ["+", "-", "X", "%", ","];

    const funcaoVirgula = () => {
        if(caracteres.includes(inputText[inputText.length - 1]) && permitirVirgula) {
            setTextoInput(inputText + textoBotao); 
            setPermitirVirgula(!permitirVirgula);
        };
    };

    const funcaoOperador = () => {
        if(!operadores.includes(inputText[inputText.length - 1])){ 
           setTextoInput(inputText + textoBotao);
           !permitirVirgula && setPermitirVirgula(!permitirVirgula);
        };
    };

    const funcaoCalcular = () => {
        let contaFormatada = inputText.replace(/X/g, "*");
        contaFormatada = contaFormatada.replace(/%/g, "/");
        const resultado = eval(contaFormatada);
        setTextoInput(String(resultado));
        historico?.push({operacao: inputText, resultado: resultado});
    };

    const verificarOperacao = (operacao: string) => {
        const operacoes = {
            limpar: () => clearTextoInput(),
            caractere: () => setTextoInput(inputText + textoBotao),
            limparUm: () => setTextoInput(inputText.slice(0, -1)),
            operador: () => funcaoOperador(),
            virgula: () => funcaoVirgula(),
            calcular: () => funcaoCalcular(),
            // @ts-ignore
            historico: () => navigation.navigate("Historico"),
        };

        // @ts-ignore
        return operacoes[operacao];
    };

    return (
        <TouchableOpacity 
            style={[styles.fundoBotao, {backgroundColor: corBotao}]} 
            onPress={() => {
                // @ts-ignore
                verificarOperacao(operacao)()
                }}>
            <Text style={styles.textoBotao}>{textoBotao}</Text>
        </TouchableOpacity>
    )
};

export default ButtonCalculator;