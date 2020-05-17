import React, { useState } from "react";
import { Button, Form, Item, Text, Input, Label } from "native-base";
import { Alert, StyleSheet, ImageBackground } from "react-native";
import UserService from "../services/User";
import Loading from "../components/Loading";

export default function Login({ navigation, setLogged }) {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ loading, setLoading ] = useState(false);

  return (
    <ImageBackground source={require("../assets/Vector.png")} style={styles.imageBackground} imageStyle={styles.imageStyle} >      
      <Form style={styles.form}>
        <Text style={styles.title}>Viagem do Pensamento</Text>
        <Text style={styles.subtitle}>{'Pensar, sentir e agir de \nmodo saudável'}</Text>

        <Item style={styles.inputSpacing}>
          <Input
            placeholder="E-mail" 
            style={styles.input}
            keyboardType={"email-address"}
            onChangeText={value => { setEmail(value) }} />
        </Item>

        <Item style={styles.inputSpacing}>
          <Input 
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={true} 
            password={true} 
            onChangeText={value => { setPassword(value) }} />
        </Item>

          <Button onPress={_ => { doSubmitLogin({ email, password }, setLoading, setLogged) }} 
            full
            rounded 
            style={styles.button}>
            <Text style={styles.loginButtonText}>Login</Text>
          </Button>
          <Button transparent full
            rounded
            onPress={() => navigation.navigate("Register")}
            style={styles.button}>
            <Text style={styles.registerButtonLink}>Cadastrar-se</Text>
          </Button>
        </Form>

      <Loading loading={loading} />
    </ImageBackground>
  );
}

const doSubmitLogin = (values, setLoading, setLogged) => {
  const { email, password } = values;
  setLoading(true);

  UserService.login(email, password)
  .then(() => {
    setLoading(false);
    setLogged(true);
  })
  .catch(e => {
    Alert.alert(
      'Erro',
      'Usuário ou senha incorretos.',
      [
        { text: 'OK', onPress: () => {
          setLoading(false);
         }},
      ],
      { cancelable: false })
  });
}

const styles = StyleSheet.create({
  imageStyle: {
    resizeMode: "cover",
    alignSelf: "center"
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center"
  },
  form: {
    marginHorizontal: 20,
  },
  input: {
    color: "#000"
  },
  inputSpacing: {
    backgroundColor: "#FFF",
    marginBottom: 20,
    borderBottomWidth: 0,
    marginTop: 0,
    marginLeft: 0,
    borderRadius: 10,
    borderColor: "#000",
    elevation: 10,
  },
  input: {
    paddingLeft: 5,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    lineHeight: 50,
    textAlign: 'center',
    color: "#FFFFFF",
    // fontFamily: "Cochin"
  },
  subtitle: {
    color: "#3F3232",
    marginTop: "10%",
    textAlign: 'center',
    marginBottom: "10%",
    lineHeight: 25,
    fontSize: 18,
    letterSpacing: -0.5
  },
  button: {
    marginTop: 10,
    marginHorizontal: 60,
  },
  registerButton: {
    marginTop: 20,
    marginHorizontal: 60,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20
  },
  registerButtonLink: {
    color: "#025D8C",
    fontSize: 20
  }
});
