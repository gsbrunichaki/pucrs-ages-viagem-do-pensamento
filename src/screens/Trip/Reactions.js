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
import { StyleSheet, TextInput, Alert, TouchableOpacity, Platform } from "react-native";
import Emoji from 'react-native-emoji';
import TripSchema from "../../schemas/Trip"; 
import TripService from "../../services/Trip";
import Loading from "../../components/Loading";
import CloudImageBackground from "../../components/CloudImageBackground";
import shadowCode from "../../components/shadowCode";
import Colors from "../../assets/Colors/Colors";


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
            <Text style={style.mainText}>
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
            <Text style={style.mainText}>Como você acha que se comportou?</Text>
            </CardItem>
            {autoAnalysis === null ? 
            <View style={style.buttons}>
            <TouchableOpacity style={style.thumbsUp} onPress={() => setAutoAnalysis("up")}><Emoji name="+1" style={{fontSize: 60}} /></TouchableOpacity>
            <TouchableOpacity style={style.thumbsDown} onPress={() => setAutoAnalysis("down")}><Emoji name="-1" style={{fontSize: 60}} /></TouchableOpacity>
            </View>
           : 
            <View style={style.buttons}>
            <TouchableOpacity style={[style.thumbsUp, {borderColor: autoAnalysis === "up" ? 'black' : 'green'}]} onPress={() => setAutoAnalysis("up")} first active={autoAnalysis === "up"}><Emoji name="+1" style={{fontSize: 60, borderColor: 'black'}} /></TouchableOpacity>
            <TouchableOpacity style={[style.thumbsDown, {borderColor: autoAnalysis === "down" ? 'black' : 'red'}]} onPress={() => setAutoAnalysis("down")} last active={autoAnalysis === "down"}><Emoji name="-1" style={{fontSize: 60, borderColor: 'black'}} /></TouchableOpacity>
            </View>
            }
            </Card>
            {autoAnalysis === "up" && 
              (
              <Content style={style.feedback}>
                <View style={style.positiveBox}>
              <Text style={style.feedbackText}>Esse é o feedback da ação selecionada no botão acima. Tem função de dar um retorno sobre a escolha da criança</Text>
                </View>
                  <Button full rounded style={style.button} title="Clique aqui para completar a sua viagem"
              onPress={_ => saveTrip({ aircraft, island, thoughts, autoAnalysis:autoAnalysis === "up", behaviour }, {setLoading, loading})}>
              <Text style={style.textButton}>Completar</Text>
              </Button>  
              </Content>
              )
            }
            {autoAnalysis === "down" && 
              (
              <Content style={style.feedback}>
                <View style={style.negativeBox}>
              <Text style={style.feedbackText}>Esse é o feedback da ação selecionada no botão acima. Tem função de dar um retorno sobre a escolha da criança</Text>
                </View>
              <Button full rounded style={style.button} title="Clique aqui para completar a sua viagem"
              onPress={_ => saveTrip({ aircraft, island, thoughts, autoAnalysis:autoAnalysis === "up", behaviour }, {setLoading, loading})}>
              <Text style={style.textButton}>Completar</Text>
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
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
    top: 10,
    ...shadowCode,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  thumbsUp: {
    backgroundColor: Colors.caribbeanGreen,
    borderRadius: 30,
    padding: 30,
    ...shadowCode
  },
  thumbsDown: {
    backgroundColor: Colors.lightOrange,
    borderRadius: 30,
    padding: 30,
    ...shadowCode
  },
  textButton: {
    marginTop: 1,
    marginHorizontal: 60,
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    backgroundColor: Colors.white,
  },
  feedback: {
    padding: 10,
    ...shadowCode,
    overflow: "visible",
  },
  feedbackText: {
    color: "white",
    fontSize: 22,
    padding: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  positiveBox: {
    backgroundColor: Colors.caribbeanGreen,
    borderRadius: 10,
    shadowColor: Colors.shadowGray,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: -20,
    elevation: -3,
    zIndex: -1,
  },
  negativeBox: {
    backgroundColor: Colors.lightOrange,
    borderRadius: 10,
    shadowColor: Colors.shadowGray,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: -20,
    elevation: -3,
    zIndex: -1,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingRight: 40,
    paddingLeft: 40,
    ...shadowCode,
  },
  content: {
    display: "flex",
    flex: 1,
  },
  mainText: {
    display: "flex",
    fontSize: 26,
    lineHeight: 30,
    textAlign: "left",
    color: Colors.coffee,
    //fontFamily: 'Nunito'
  },
  subtext: {
    display: "flex",
    alignItems: "flex-start",
    fontSize: 15,
    lineHeight: 25,
    textAlign: "left",
    color: Colors.shadowGray,
    // fontFamily: "Nunito"
  },
  firstCard: {
    padding: 10,
    ...Platform.select({
      ios: {
        ...shadowCode
      },
    }),
  },
  firstCardItem: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 25,
    paddingLeft: 30,
    paddingRight: 30,
    ...Platform.select({
      android: {
        ...shadowCode
      },
    }),
  },
  firstCardItem2: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.white,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 25,
    paddingLeft: 30,
    paddingRight: 30,
    ...shadowCode,
  },
  cardItem: {
    backgroundColor: Colors.white,
  },
  lastCardItem: {
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: 40,
    paddingLeft: 30,
    paddingRight: 30,
    ...Platform.select({
      android: {
        ...shadowCode
      },
    }),
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
    elevation: 3,
    ...shadowCode,
    // borderWidth: 2,
    // borderColor: "#9E9E9E",
    borderRadius: 10,
    backgroundColor: Colors.white,...Platform.select({
      android: {
        height: 50,
      },
    }),
    padding: 10,
    width: "100%",
    //Dinamica
    // width: 380,
  },
});
