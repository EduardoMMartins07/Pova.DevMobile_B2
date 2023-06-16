import { Button, Image, Text, View, StyleSheet } from "react-native";

export default function Cards(props){
    return (
        <View style = {styles.container}>
            <View style = {styles.viewImagem}>
                <Image style = {styles.imageItem} source = {{
                    uri: props.cards.urlImagem}}/>
            </View>
            <View style = {styles.viewDados}>
                    <Text style = {styles.titulo}>{props.cards.titulo}</Text>
                    <Text style = {styles.descricao}>{props.cards.descricao}</Text>
                    <Button style = {styles.troca} title = "Troca"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 160,
        backgroundColor: '#414141',
        borderRadius: 15,
        margin: 5
    },
    viewImagem: {
        width: '30%',
        padding: 10,
    },
    viewDados: {
        width: '70%',
        padding: 10,
    },
    imageItem: {
        width: '100%',
        height: '100%',
        borderRadius: 15
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});