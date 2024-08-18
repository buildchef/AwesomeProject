import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreen"; 
import Calculator from "../screens/calculator";
import Historico from "../screens/historico";

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Calculator" component={Calculator}/>
                <Stack.Screen name="Historico" component={Historico}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;