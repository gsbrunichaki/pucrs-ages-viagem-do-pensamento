import React, { Component, useState } from "react";
import {
  Container,
  Content,
  Button,
  Segment,
  Card,
  CardItem,
  Text,
} from "native-base";
import { StyleSheet, TextInput, Alert } from "react-native";
import TripSchema from "../../schemas/Trip"; 
import TripService from "../../services/Trip";
import Loading from "../../components/Loading";

export default function Reactions({ route, navigation }) {
  const [behaviour, setBehaviour] = useState("");
  const [autoAnalysis, setAutoAnalysis] = useState(true);
  const [loading, setLoading] = useState(false);

  const { aircraft, island, thoughts } = route.params;
  return (
    <Container style={style.container}>
      <Content style={style.content}>
        <Card transparent>
          <CardItem header style={style.firstCardItem}>
            <Text style={style.maintext}>
              Qual será a sua atitude na situação?
            </Text>
            <Text style={style.subtext}>
              Explique melhor o seu comportamento.
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
          <CardItem header style={style.firstCardItem}>
            <Text style={style.maintext}>Como você acha que se comportou?</Text>
          </CardItem>

          <CardItem header bordered style={style.lastCardItem}>
            <Segment>
              <Button onPress={_ => setAutoAnalysis(true)} first active={autoAnalysis === true}><Text>Bem</Text></Button>
              <Button onPress={_ => setAutoAnalysis(false)} last active={autoAnalysis === false}><Text>Mau</Text></Button>
            </Segment>
          </CardItem>
        </Card>

        <Button full rounded style={style.button} title="Clique aqui para completar a sua viagem"
          onPress={_ => saveTrip({ aircraft, island, thoughts, autoAnalysis, behaviour }, {setLoading, loading})}>
          <Text style={style.textbutton}>Completar</Text>
        </Button>

        <Loading loading={loading} />
      </Content>
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
    //position: "absolute",
    top: 10,
    //left: 40,
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
  content: {
    display: "flex",
    // height: 100%,
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
  firstCardItem: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fafafa",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 25,
    paddingLeft: 30,
    paddingRight: 30,
  },
  cardItem: {
    backgroundColor: "#fafafa",
  },
  lastCardItem: {
    backgroundColor: "#fafafa",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
  card: {
    borderRadius: 20,
    marginBottom: 30,
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
