import React  from "react";
import {Image,ImageBackground, StyleSheet, ScrollView} from "react-native";
import {Text,Button, Card,CardItem, Input, Item, View } from "native-base";

export default function Perfil({ navigation }) {
 
  return (
    <ImageBackground source={require("../../assets/cloud-background.png")} style={styles.imageBackground0} imageStyle={styles.imageStyle} > 
    <ScrollView>
    <ImageBackground style={styles.imageBackground} imageStyle={styles.imageStyle} >
    <Card style={styles.card}>
      <Item style={styles.cardItem}>
        <Text style={styles.title}>Perfil do Responsável</Text>
        <Text style={styles.subtitle}>Insira abaixo os dados da pessoa responsável pela criança</Text>
      </Item> 
      <Item style={styles.inputSpacing}>
        <Input style={styles.input} placeholder={"Leonardo Manini"}/>
      </Item>
      <Item style={styles.inputSpacing}>
        <Input style={styles.input} placeholder={"37"}/>
      </Item>
      <Item style={styles.inputSpacing}>
        <Input style={styles.input} placeholder={"Porto Alegre"}/>
      </Item>
      <Item style={styles.inputSpacing}>
        <Input style={styles.input} placeholder={"*******"}/>
      </Item>
    </Card>




    <Card style={styles.card}>
      <Item style={styles.cardItem2}>
        <Item style={styles.cardItem}>
        <Text style={styles.title}>Perfil do dependente</Text>
          <Text style={styles.subtitle}>{'Insira abaixo os dados da criança'}</Text>
        </Item>
        <Image resizeMode={"center"} source={require("../../assets/menininha.jpg")} 
          style={
            styles.image
          }/>
      </Item> 
      <Item style={styles.inputSpacing}>
        <Input style={styles.input} placeholder={"Valentina"}/>
      </Item>
      <Item style={styles.inputSpacing}>
        <Input style={styles.input} placeholder={"8"}/>
      </Item>
      <Item style={styles.inputSpacing}>
        <Input style={styles.input} placeholder={"Porto Alegre"}/>
      </Item>
    </Card>
 
    <Button full rounded style={styles.button}>
      <Text style={styles.textbutton}>Alterar</Text>
    </Button>
    
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
  card: {
    flex: 1,
    padding:15,
    textAlign: "center",
    marginBottom: 15,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'column'
  },
  cardItem:{
    flexDirection: 'column',
  },
  cardItem2:{
    flexDirection: 'row',
  
  },

  inputSpacing: {
    backgroundColor: "#FFF",
    marginBottom: 14,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 10,
    borderColor: "#000",
    elevation: 10,
    
  },
  image: {
    flex: 1,
    width: 90,
    height: 90,
    borderRadius: 400,

  },

  input: {
    backgroundColor: "#f5f5f5",
    padding:1,
    textAlign: "left",
    
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    fontSize: 18,
    borderRadius: 10,
    elevation: 10,
  },
 title: {
    color: "#3F3232",
    fontSize: 22,
    fontWeight: "bold",
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
  button: {
    marginBottom: 30,
    marginTop: 1,
    marginHorizontal: 60,
    color: "#15A4F7",
    fontWeight: "bold",
    fontSize: 20,
    top: 10,
  },
  textbutton: {
    marginTop: 1,
    marginHorizontal: 60,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});