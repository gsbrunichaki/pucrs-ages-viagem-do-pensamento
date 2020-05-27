import React, { useState, useEffect }  from "react";
import {Image,ImageBackground, StyleSheet, ScrollView} from "react-native";
import {Text, Card, Item } from "native-base";
import TripService from "../../services/Trip";

export default function Historico({ navigation }) {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    TripService.getAll()
      .then(trip => setTrips(trip))
      .catch(err => console.error(err))
  }, []);

  console.log(trips);

  //A princpio, a variavel `trips` já tem o histórico de todas as viagens deste usuário
  //A partir desta variável, vocês devem fazer um forEach para demonstrar todos os valores desta variável

  return (
    <ImageBackground 
        source={require("../../assets/cloud-background.png")} 
        style={styles.imageBackground0} 
        imageStyle={styles.imageStyle} > 
    <ScrollView>
    <Card style={styles.cardDate}>
        <Text style={styles.textDate}>Dia 10 de maio de 2020</Text>
    </Card>      
  
    <ImageBackground  
        style={styles.imageBackground} 
        imageStyle={styles.imageStyle} >      


    <Card style={styles.card}>
    
        <Image source={require("../../assets/Good.png")} style={styles.checkmarkgood}/>

        <Item style={styles.cardItem2}>
          <Image source={require("../../assets/Plane.png")}  style={styles.image}/>
          <Text style={styles.title}>Passado</Text>
        </Item>
 

      <Item style={styles.cardItem2}>
        <Image source={require("../../assets/Thought.png")}  style={styles.image}/>
        <Text style={styles.title}>Acho que meu amigo não gosta de mim</Text>
      </Item>

      <Item style={styles.cardItem2}>
        <Image source={require("../../assets/Emotion.png")}  style={styles.image}/>
        <Text style={styles.title}>Raiva</Text>
      </Item> 
      <Item style={styles.cardItem2}>
        <Image source={require("../../assets/Action.png")}  style={styles.image}/>
        <Text style={styles.title}>Conversei com ele sobre o assunto</Text>
      </Item> 
    
    </Card>

    <Card style={styles.card}>
    
    <Image source={require("../../assets/Bad.png")} style={styles.checkmarkbad}/>

    <Item style={styles.cardItem2}>
      <Image source={require("../../assets/Plane.png")}  style={styles.image}/>
      <Text style={styles.title}>Passado</Text>
    </Item>


  <Item style={styles.cardItem2}>
    <Image source={require("../../assets/Thought.png")}  style={styles.image}/>
    <Text style={styles.title}>Acho que meu amigo não gosta de mim</Text>
  </Item>

  <Item style={styles.cardItem2}>
    <Image source={require("../../assets/Emotion.png")}  style={styles.image}/>
    <Text style={styles.title}>Raiva</Text>
  </Item> 
  <Item style={styles.cardItem2}>
    <Image source={require("../../assets/Action.png")}  style={styles.image}/>
    <Text style={styles.title}>Conversei com ele sobre o assunto</Text>
  </Item> 

</Card>


  </ImageBackground>
  </ScrollView>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    padding: 14,
  },
  imageBackground0: {
    flex: 1,
  },
  primeiroItem:{
    flexDirection: 'row',
  },  
  card: {
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'column',
    
  },
  cardItem:{
    flexDirection: 'column',  
  },
  cardItem2:{
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15


  },
  cardDate:{


    marginLeft:-1,
      marginTop: 20,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      marginRight: 15,
      
  },
  textDate:{
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
    fontWeight: "bold"
  },
  image: {
    width: 20,
    height: 20,
    tintColor: "#2C73D5",
    resizeMode: "contain",
  },
  checkmarkgood: {
    width: 20,
    height: 20,
    tintColor: "#13C4A3",
    alignSelf: "flex-end",
    marginBottom: -20
  },
  checkmarkbad: {
    width: 20,
    height: 20,
    tintColor: "#F75C03",
    alignSelf: "flex-end",
    marginBottom: -20
  },
 title: {
    marginRight: 15,
    color: "#3F3232",
    fontSize: 20,
    marginLeft: 10,
    textAlign: "left",
    textAlignVertical: "center",
    justifyContent: "flex-start",
    alignSelf: 'flex-start',


  },
  subtitle: {
    padding:5,
    color: "#798A9B",
    fontSize: 14,
    textAlign: "left",
    textAlignVertical: "center",
    alignSelf: 'flex-start',
    marginBottom: 15,
  },  
});