import { Text, View } from "react-native"
import style from "./style";
import ButtonCalculator from "../../components/botaoCalculadora";
import { CalculatorStore } from "../../store/calculatorStore";

const Calculator: React.FC = () => {
    const {inputText} = CalculatorStore((state) => state);
    return (
        <View style={style.fundo}>
            <View style={style.labelTexto}>
                <Text style={style.textoDigitado}>{inputText}</Text>
            </View>
            <View style={style.botoes}>
                <ButtonCalculator textoBotao="C" corBotao="#1a1e24" operacao="limpar"></ButtonCalculator>
                <ButtonCalculator textoBotao="()" corBotao="#1a1e24"></ButtonCalculator>
                <ButtonCalculator textoBotao="%" corBotao="#1a1e24" operacao="operador"></ButtonCalculator>
                <ButtonCalculator textoBotao="<" corBotao="#7d232a" operacao="limparUm"></ButtonCalculator>
            </View>
            <View style={style.botoes}>
                <ButtonCalculator textoBotao="7" corBotao="#4a505e" operacao="caractere"></ButtonCalculator>
                <ButtonCalculator textoBotao="8" corBotao="#4a505e" operacao="caractere"></ButtonCalculator>
                <ButtonCalculator textoBotao="9" corBotao="#4a505e" operacao="caractere"></ButtonCalculator>
                <ButtonCalculator textoBotao="X" corBotao="#1a1e24" operacao="operador"></ButtonCalculator>
            </View>
            <View style={style.botoes}>
                <ButtonCalculator textoBotao="4" corBotao="#4a505e" operacao="caractere"></ButtonCalculator>
                <ButtonCalculator textoBotao="5" corBotao="#4a505e" operacao="caractere"></ButtonCalculator>
                <ButtonCalculator textoBotao="6" corBotao="#4a505e" operacao="caractere"></ButtonCalculator>
                <ButtonCalculator textoBotao="-" corBotao="#1a1e24" operacao="operador"></ButtonCalculator>
            </View>
            <View style={style.botoes}>
                <ButtonCalculator textoBotao="1" corBotao="#4a505e" operacao="caractere"></ButtonCalculator>
                <ButtonCalculator textoBotao="2" corBotao="#4a505e" operacao="caractere"></ButtonCalculator>
                <ButtonCalculator textoBotao="3" corBotao="#4a505e" operacao="caractere"></ButtonCalculator>
                <ButtonCalculator textoBotao="+" corBotao="#1a1e24" operacao="operador"></ButtonCalculator>
            </View>
            <View style={style.botoes}>
                <ButtonCalculator textoBotao="H" corBotao="#08215e" operacao="historico"></ButtonCalculator>
                <ButtonCalculator textoBotao="0" corBotao="#4a505e" operacao="caractere"></ButtonCalculator>
                <ButtonCalculator textoBotao="," corBotao="#1a1e24" operacao="virgula"></ButtonCalculator>
                <ButtonCalculator textoBotao="=" corBotao="#2d914b" operacao="calcular"></ButtonCalculator>
            </View>
        </View>
    )
}

export default Calculator;