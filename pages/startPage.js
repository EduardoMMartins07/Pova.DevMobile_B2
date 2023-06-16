import { View } from "react-native";
import { Link } from '@react-navigation/native';

export default function startPage(){
    return (
        <View >
            <Link to={{screen: 'loginPage'}}>Login</Link>
            <Link to={{screen: 'cadastrarPage'}}>Cadastrar</Link>
        </View>
    );
}
