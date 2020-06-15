import React from "react";
import { View, Button, Text } from "native-base";
import { StyleSheet } from "react-native";
import UserService from "../services/User";
import IconTextButton from "../components/IconTextButton";
import CloudImageBackground from "../components/CloudImageBackground";
import PageBanner from "../components/PageBanner";


export default function Home({ navigation, setLogged }) {
  return (
    <CloudImageBackground>
      <PageBanner title={"Bem-vindo(a) à Viagem do Pensamento!"} />

      <View style={styles.contStyle}>
        <Text style={styles.textStyle}></Text>

        <IconTextButton
          title="Viajar"
          subtitle="Faça sua viagem"
          onPress={(_) => {
            navigation.navigate("TripAircraft");
          }}
          image={require("../assets/PlaneHome.png")
            
        }
        />

        <IconTextButton
          title="Tutorial"
          subtitle="Aprenda a utilizar o aplicativo."
          onPress={() => {
            navigation.navigate("TutorialAircraft");
          }}
          image={require("../assets/cloud-icon.png")}
        />

        <IconTextButton
          title="Passaporte"
          subtitle="Ver informações salvas sobre você."
          onPress={(_) => {
            navigation.navigate("Passaporte");
          }}
          image={require("../assets/PassportHome.png")}
        />


      </View>
    </CloudImageBackground>
  );
}

const styles = StyleSheet.create({
  contStyle: {
    padding: 15,
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 18,
    
  },
  buttonStyle: {
    justifyContent: "center",
  },
});
/*
<Button
style={styles.buttonStyle}
onPress={() => {
  UserService.logout();
  setLogged(false);
}}
>
<Text style={styles.textStyle}>Sair</Text>
</Button>
*/