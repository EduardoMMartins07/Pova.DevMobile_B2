import { StyleSheet, View } from 'react-native';
import Cards from './Cards';

const listItens = [
  {
      titulo: "Espada de Diamante",
      descricao: "ATAQUE: 7 \n DEFESA: 0 \n ATRIBUTO: --",
      urlImagem: "https://d2r9epyceweg5n.cloudfront.net/stores/001/249/603/products/pixel211-2a77d032ade7201ef115950160648728-480-0.png"
  },
  {
      titulo: "Arco",
      descricao: "ATAQUE: 8 \n DEFESA: 0 \n ATRIBUTO: --",
      urlImagem: "https://preview.free3d.com/img/2018/09/2146744927885723437/1yay6vp0.jpg"
  },
  {
      titulo: "Escudo",
      descricao: "ATAQUE: 1 \n DEFESA: 6 \n ATRIBUTO: --",
      urlImagem: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c6/Shield_JE2_BE1.png"
  },
  {
      titulo: "Poção de Regeneração",
      descricao: "ATAQUE: 0 \n DEFESA: 0 \n ATRIBUTO: Durante 30s a vida se regenerá a 150%",
      urlImagem: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3e/Potion_of_Healing_JE2_BE2.png"
  }
]

export default function cardsRPGPage() {
  return (
    <View style={styles.container}>
        {
            listItens.map(cards =>
                <Cards cards={cards}/>)
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222120',
    alignItems: 'center',
    justifyContent: 'center',
  },
});