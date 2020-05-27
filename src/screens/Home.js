import React from "react";
import { Content, Button, Text } from "native-base";
import {StyleSheet} from "react-native";
import UserService from "../services/User";
import IconTextButton from "../components/IconTextButton";
import CloudImageBackground from "../components/CloudImageBackground";


export default function Home({ navigation, setLogged }) {

  return (
    <CloudImageBackground>
      <Content style={
        styles.contStyle
      }>
        <Text style={styles.textStyle}>Bem-vindo(a) à Viagem do Pensamento!</Text>

        <IconTextButton title="Viajar"
          subtitle="Faça sua viagem"
          onPress={_ => { navigation.navigate("TripAircraft") }}
          image={require("../assets/cloud-icon.png")} />

        <IconTextButton title="Tutorial"
          subtitle="Aprenda a utilizar o aplicativo."
          onPress={(_) => {
            alert("Tutorial em construção...");
          }}
          image={require("../assets/cloud-icon.png")} />

        <IconTextButton title="Passaporte"
          subtitle="Ver informações salvas sobre você."
          onPress={_ => { navigation.navigate("Passaporte") }}
          image={require("../assets/cloud-icon.png")} />

        <Button 
          onPress={() => { UserService.logout(); setLogged(false); }}>
          <Text style={styles.textStyle}>Deslogar</Text>
        </Button>

      </Content>
    </CloudImageBackground>
  );
}

const styles = StyleSheet.create({
  contStyle:{
    padding: 15,
  },
  textStyle:{
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 18,
    marginTop: 15,
    marginBottom: 15,
  },
  buttonStyle:{

  }
});
