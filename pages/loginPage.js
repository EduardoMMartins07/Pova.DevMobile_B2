import { Text, View } from "react-native";
import { Link } from '@react-navigation/native';

export default function loginPage(){
    return (
        <View >
            <Link to={{screen: 'recuperarSenhaPage'}}>Recuperar Senha</Link>
            <Link to={{screen: 'cardsRPGPage'}}>Entrar</Link>
            
        </View>
    );
}
