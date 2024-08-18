import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { CalculatorStore } from "../../store/calculatorStore";
import style from "./style";
import HistoricoList from "../../components/historico";

const Historico: React.FC = () => {
    const {historico, clearHistorico} = CalculatorStore((state) => state);

    return(
        <View style={style.fundo}>
            <Text style={style.titulo}>Histórico</Text>
            <FlatList
                data={historico}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <HistoricoList 
                        operacao={item.operacao} 
                        resultado={item.resultado}
                    ></HistoricoList>
                )}
            ></FlatList>
        </View>
    )
};

export default Historico;