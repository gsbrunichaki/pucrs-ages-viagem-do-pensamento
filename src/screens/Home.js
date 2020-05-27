import React from "react";
import { Content, Button, Text } from "native-base";

import UserService from "../services/User";
import IconTextButton from "../components/IconTextButton";
import CloudImageBackground from "../components/CloudImageBackground";

export default function Home({ navigation, setLogged }) {

  return (
    <CloudImageBackground>
      <Content>
        <Text>Bem-vindo(a) à Viagem do Pensamento!</Text>

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

        <Button onPress={() => { UserService.logout(); setLogged(false); }}>
          <Text>Deslogar</Text>
        </Button>

      </Content>
    </CloudImageBackground>
  );
}
