import React, { Component, useState } from "react";
import {
  Container,
  Content,
  Button,
  Card,
  CardItem,
  Text,
  View,
} from "native-base";
import { StyleSheet, TextInput, Alert, TouchableOpacity, } from "react-native";
import Emoji from 'react-native-emoji';
import TripSchema from "../../schemas/Trip"; 
import TripService from "../../services/Trip";
import Loading from "../../components/Loading";
import CloudImageBackground from "../../components/CloudImageBackground";


export default function Reactions({ route, navigation }) {
  const [behaviour, setBehaviour] = useState("");
  const [autoAnalysis, setAutoAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  function displayFeedback(){
    text.style.display = "block";
  }

  const { aircraft, island, thoughts } = route.params;
  return (
    <Container style={style.container}>
      <CloudImageBackground>
        <Content style={style.content}>
        <Card transparent style={style.firstCard}>
          <CardItem header style={style.firstCardItem}>
            <Text style={style.maintext}>
              Qual será a sua atitude na situação?
            </Text>
            <Text style={style.subtext}>
              Explique melhor o seu comportamento abaixo.
            </Text>
          </CardItem>
          <CardItem header bordered style={style.lastCardItem}>
            <TextInput
              style={style.TextInputStyleClass}
              underlineColorAndroid="transparent"
              placeholder={"Comportamento"}
              placeholderTextColor={"#9E9E9E"}
              numberOfLines={5}
              multiline={true}
              onChangeText={value => setBehaviour(value)}
            />
          </CardItem>
        </Card>

        <Card transparent style={style.card}>
          <CardItem header style={style.firstCardItem2}>
            <Text style={style.maintext}>Como você acha que se comportou?</Text>
            </CardItem>
            {autoAnalysis === null ? 
            <View style={style.botoes}>
            <TouchableOpacity style={style.thumbsup} onPress={() => setAutoAnalysis("up")}><Emoji name="+1" style={{fontSize: 60}} /></TouchableOpacity>
            <TouchableOpacity style={style.thumbsdown} onPress={() => setAutoAnalysis("down")}><Emoji name="-1" style={{fontSize: 60}} /></TouchableOpacity>
            </View>
           : 
            <View style={style.botoes}>
            <TouchableOpacity style={[style.thumbsup, {borderColor: autoAnalysis === "up" ? 'black' : 'green'}]} onPress={() => setAutoAnalysis("up")} first active={autoAnalysis === "up"}><Emoji name="+1" style={{fontSize: 60, borderColor: 'black'}} /></TouchableOpacity>
            <TouchableOpacity style={[style.thumbsdown, {borderColor: autoAnalysis === "down" ? 'black' : 'red'}]} onPress={() => setAutoAnalysis("down")} last active={autoAnalysis === "down"}><Emoji name="-1" style={{fontSize: 60, borderColor: 'black'}} /></TouchableOpacity>
            </View>
            }
            </Card>
            {autoAnalysis === "up" && 
              (
              <Content style={style.feedbacks}>
              <Text style={style.positivetext}>Esse é o feedback da ação selecionada no botão acima. Tem função de dar um retorno sobre a escolha da criança</Text>
              <Button full rounded style={style.button} title="Clique aqui para completar a sua viagem"
              onPress={_ => saveTrip({ aircraft, island, thoughts, autoAnalysis:autoAnalysis === "up", behaviour }, {setLoading, loading})}>
              <Text style={style.textbutton}>Completar</Text>
              </Button>  
              </Content>
              )
            }
            {autoAnalysis === "down" && 
              (
              <Content style={style.feedbacks}>
              <Text style={style.negativetext}>Esse é o feedback da ação selecionada no botão acima. Tem função de dar um retorno sobre a escolha da criança</Text>
              <Button full rounded style={style.button} title="Clique aqui para completar a sua viagem"
              onPress={_ => saveTrip({ aircraft, island, thoughts, autoAnalysis:autoAnalysis === "up", behaviour }, {setLoading, loading})}>
              <Text style={style.textbutton}>Completar</Text>
              </Button>
              </Content>
              )
            }

        <Loading loading={loading} />
        </Content>
      </CloudImageBackground>
    </Container>
  );
}

const saveTrip = (trip, { setLoading, loading }) => {
  if (loading)
    return;

  setLoading(true);

  const schema = new TripSchema(trip);
  
  TripService.create(schema)
    .then(_ => {
      setLoading(false);
      alert("Criado com sucesso!");
    })
    .catch(errorCode => {
      console.log(errorCode);

      Alert.alert(
        "Erro",
        errorCode.toString(),
        [{ text: "OK", onPress: () => setLoading(false) }],
        { cancelable: false }
      );
    });
}

const style = StyleSheet.create({
  button: {
    marginBottom: 30,
    marginTop: 1,
    marginHorizontal: 60,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    top: 10,
    shadowColor: "#798A9B",
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    elevation: 5,
    zIndex: 5,
  },
  rodape: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  thumbsup: {
    backgroundColor: "#13C4A3",
    borderRadius: 30,
    padding: 30,
  },
  thumbsdown: {
    backgroundColor: "#FF8252",
    borderRadius: 30,
    padding: 30,
  },
  textbutton: {
    marginTop: 1,
    marginHorizontal: 60,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    backgroundColor: "#f4f4f4",
  },
  feedbacks: {
    padding: 10,
    shadowColor: "#798A9B",
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    elevation: 5,
    zIndex: 5,
  },
  positivetext: {
    backgroundColor: "#13C4A3",
    color: "white",
    fontSize: 22,
    padding: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  negativetext: {
    backgroundColor: "#FF8252",
    color: "white",
    fontSize: 22,
    padding: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  botoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingRight: 40,
    paddingLeft: 40,
    shadowColor: "#798A9B",
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    elevation: 5,
    zIndex: 5,
  },
  content: {
    display: "flex",
    flex: 1,
  },
  maintext: {
    display: "flex",
    fontSize: 26,
    lineHeight: 30,
    textAlign: "left",
    color: "#3F3232",
    //fontFamily: 'Nunito'
  },
  subtext: {
    display: "flex",
    alignItems: "flex-start",
    fontSize: 15,
    lineHeight: 25,
    textAlign: "left",
    color: "#798A9B",
    // fontFamily: "Nunito"
  },
  firstCard: {
    padding: 10,
  },
  firstCardItem: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fafafa",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 25,
    paddingLeft: 30,
    paddingRight: 30,
    shadowColor: "#798A9B",
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    elevation: 5,
    zIndex: 5,
  },
  firstCardItem2: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fafafa",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 25,
    paddingLeft: 30,
    paddingRight: 30,
    shadowColor: "#798A9B",
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    elevation: 5,
    zIndex: 5,
  },
  cardItem: {
    backgroundColor: "#fafafa",
  },
  lastCardItem: {
    backgroundColor: "#fafafa",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: 40,
    paddingLeft: 30,
    paddingRight: 30,
    shadowColor: "#798A9B",
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    elevation: 5,
    zIndex: 5,
  },
  card: {
    borderTopRightRadius: 20,
    paddingBottom: 10,
    paddingRight: 10,
    
  },
  TextInputStyleClass: {
    display: "flex",
    fontSize: 20,
    //textAlign: 'center',
    elevation: 8,
    shadowColor: "rgb(63, 50, 50)",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 8,
    // borderWidth: 2,
    // borderColor: "#9E9E9E",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    height: 50,
    padding: 10,
    width: "100%",
    //Dinamica
    // width: 380,
  },
});
