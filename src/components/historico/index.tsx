import { Text, View } from "react-native";
import style from "./style";

type HistoricoListProps = {
    operacao: string,
    resultado: string
}

const HistoricoList: React.FC<HistoricoListProps> = ({operacao, resultado}) => {
    return(
        <View style={style.fundo}>
            <Text style={style.operacao}>{operacao}</Text>
            <Text style={style.resultado}>{resultado}</Text>
        </View>
    );
};

export default HistoricoList;