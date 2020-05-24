import React, { useState } from "react";
import { View, ImageBackground, StyleSheet,ScrollView} from "react-native";
import CloudImageBackground from "../../components/CloudImageBackground";
import PageBanner from "../../components/PageBanner";
import { Text, Button,Item,Input } from "native-base";
import { white } from "react-native-paper/lib/typescript/src/styles/colors";

export default function Bag({ route, navigation }) {
  const [pensamentos,setPensamentos] = useState(""); 
  const { aircraft } = route.params;
  return (
    <CloudImageBackground>
       <Text> {aircraft} </Text>
       <PageBanner title={'Que pensamentos você levará na mala?'} />
      
        
        <ImageBackground  style={styles.camiseta} resizeMode="contain" source={require("../../assets/shirt.png")}>
        
        <ScrollView style={[styles.scrollview]}>
          <Text style={styles.text}> {pensamentos} </Text>
        </ScrollView>

        </ImageBackground>    
        <Item style={styles.inputSpacing}>
          <Input 
            value={pensamentos}
            placeholder="Pensamento" 
            style={styles.input}
            onChangeText={(value)=>{setPensamentos(value)}}
           />
        </Item>

      <Button style={[styles.button,styles.button1]} full rounded onPress={()=>{setPensamentos("Nossa, legal ")}}>
        <Text>Nossa, legal</Text>
      </Button>

      <Button style={[styles.button,styles.button2]} full rounded onPress={()=>{setPensamentos("Humm, Ok ")}}>
        <Text>Humm, Ok.</Text>
      </Button>
      
      
      <Button style={[styles.button,styles.button3]} full rounded onPress={()=>{setPensamentos("Ah, não gostei ")}}>
        <Text>Ah, não gostei...</Text>
      </Button>

      <Button style={[styles.button,styles.button4]} full rounded onPress={_ => { navigation.navigate("TripIslands", { aircraft, thoughts: [pensamentos, "t2", "t3"] }) }}>
        <Text>Continuar</Text>
      </Button>
    </CloudImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
  },
  button: {
    marginBottom: 10,
    marginHorizontal: 30,
  },

  button1: {
    backgroundColor:"#13C4A3",

  },
  button2: {
    backgroundColor:"#F1C30F",

  },
  button3: {
    backgroundColor:"#F75C03",

  },
  button4:{
    marginHorizontal: 80,
  },
  inputSpacing: {
    backgroundColor: "#FFF",
    marginBottom: 20,
    borderBottomWidth: 0,
    width:"100%",
    borderRadius: 10,
    borderColor: "#000",
    elevation: 10,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
  },
  input: {
    width: "100%",
    color: "#000",
  },
  camiseta: {
    flex : 1,
    paddingTop: 110,
    paddingLeft: 90,
  },
  content: {
    flex: 1,
    marginTop: '1%',
    alignItems: "center",
    flexDirection: "column"
  },
  contentImage: {
    flex: 1,
    alignContent: "center",
    width: '100%',
    height: '100%',
    flexDirection: "row",
    // boar

  },
  Emotion: {

    flex: 0.43,
    width: "75%",
    height: "75%",
    resizeMode: 'contain',
    alignSelf: "center",

  },
  Bagimage: {
    flex: 1,
    alignItems: 'center',
    width: "90%",
    height: "90%",
    alignSelf: "center"
  },
  Boardimage: {
    flex: 1,
    width: "100%",
    height: "90%",
    resizeMode: 'contain',
    alignSelf: "center"


  },
  title: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: 'bold',
    margin: 1,
    textAlign: "center"
  },
});