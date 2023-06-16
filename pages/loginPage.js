import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Link } from '@react-navigation/native';

export default function loginPage(){
    return (
        <View >
            <TouchableOpacity style={styles.bottom}>
                <Link to={{screen: 'recuperarSenhaPage'}}>Recuperar Senha</Link>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottom}>
                <Link to={{screen: 'cardsRPGPage'}}>Entrar</Link>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.bottom}>
                <Link to={{screen: 'dashboardPage'}}>Dashboard</Link>
            </TouchableOpacity> 
        </View>
    );
}

const styles = StyleSheet.create({
    bottom: {
        height: 40,
        width: '95%',
        backgroundColor: 'yellow',
        margin: 10, 
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.60)'
    }
})