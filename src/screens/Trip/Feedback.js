import React from "react";
import { Container, Button, Text, View } from "native-base";
import { StyleSheet } from "react-native";

import shadowCode from "../../components/shadowCode";
import Colors from "../../assets/Colors/Colors";
import PageBanner from "../../components/PageBanner";
import CloudImageBackground from "../../components/CloudImageBackground";

export default function Feedback({ route, navigation }) {
  const { autoAnalysis } = route.params;

  return (
    <Container style={style.container}>
      <CloudImageBackground>
        <View style={style.content}>

          <PageBanner title="Sua viagem foi registrada com sucesso!" />

          {autoAnalysis ?
            <View style={style.feedback}>
              <View style={style.positiveBox}>
                <Text style={style.feedbackText}>
                  Parabéns!
                  Foi legal para você esta viagem do pensamento. Lembre-se de ter bons pensamentos, emoções confortáveis e agir com cuidado.
                  </Text>
              </View>
              <Button full rounded style={style.button, { marginHorizontal: 60 }} onPress={_ => navigation.navigate("Home")} title="Clique aqui para voltar ao menu inicial">
                <Text style={style.textButton}>Início</Text>
              </Button>
            </View>
            :
            <View style={style.feedback}>
              <View style={style.negativeBox}>
                <Text style={style.feedbackText}>
                  Poxa... não foi desta vez que a viagem do pensamento foi legal.
                  Lembre-se de ter bons pensamentos, emoções confortáveis e agir com cuidado.
                </Text>
              </View>

              <PageBanner title="Vamos refazer?" />

              <View style={style.buttonGroup}>
                <Button full rounded style={style.button} onPress={_ => navigation.navigate("TripAircraft")} title="Clique aqui para reiniciar a viagem">
                  <Text style={style.textButton}>Sim</Text>
                </Button>
                <Button full rounded style={style.button} onPress={_ => navigation.navigate("Home")} title="Clique aqui para voltar ao menu inicial">
                  <Text style={style.textButton}>Não</Text>
                </Button>
              </View>
            </View>
          }
        </View>
      </CloudImageBackground>
    </Container>
  );
}

const style = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  button: {
    marginBottom: 30,
    marginTop: 1,
    padding: 10,
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
    top: 10,
    ...shadowCode,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textButton: {
    marginTop: 1,
    marginHorizontal: 60,
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    backgroundColor: "transparent",
  },
  feedback: {
    ...shadowCode,
    overflow: "visible",
    justifyContent: "center",
    flex: 1
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
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: -20,
    elevation: -3,
    zIndex: -1,
    margin: 10
  },
  negativeBox: {
    backgroundColor: Colors.lightOrange,
    borderRadius: 10,
    shadowColor: Colors.shadowGray,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: -20,
    elevation: -3,
    zIndex: -1,
    margin: 10
  },
});
