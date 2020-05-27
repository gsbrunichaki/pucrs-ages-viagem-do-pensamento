import React, { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, ScrollView, Alert } from "react-native";
import { Text, Button, View, Card, Input, Item, Picker, DatePicker, Label } from "native-base";
import UserService from "../../services/User";
import UserSchema from "../../schemas/UserUpdate";


export default function Perfil({ navigation }) {

  const [user, setUser] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [childrenName, setChildrenName] = useState(null);
  const [childrenGender, setChildrenGender] = useState(null);
  const [childrenBirthday, setChildrenBirthday] = useState(null);

  const values = {
    name,
    childrenGender,
    childrenName,
    childrenBirthday
  };

  useEffect(() => {
    UserService.getUserData()
      .then(u => {
        console.log(u)
        setUser(u);
        setName(u.name);
        setEmail(u.email);
        setChildrenName(u.childrenName);
        setChildrenGender(u.childrenGender);
        setChildrenBirthday(u.childrenBirthday);
       })
      .catch(err => console.error(err))
  }, []);

  return (
    <ImageBackground source={require("../../assets/cloud-background.png")}
      style={styles.imageBackground0}
      imageStyle={styles.imageStyle} >
      <ScrollView>
        <ImageBackground style={styles.imageBackground} imageStyle={styles.imageStyle} >
          <Card style={styles.card}>
            <View style={styles.cardItem}>
              <Text style={styles.title}>Perfil do Responsável</Text>
              <Text style={styles.subtitle}>Insira abaixo os dados da pessoa responsável pela criança</Text>
            </View>
            <Item style={styles.inputSpacing}>
              <Input style={styles.input} placeholder={"Ex: Pedro Henrique"}
                defaultValue={name}
                onChangeText={value => setName(value)} />
            </Item>
            <Item style={styles.inputSpacingBlocked}>
              <Input style={styles.input} placeholder={"Ex: crianca@viagemdopensamento.com.br"}
                defaultValue={email}

                onChangeText={value => setEmail(value)} />
            </Item>
            <Item style={styles.inputSpacing}>
              <Input style={styles.input} placeholder={"*******"} />
            </Item>
          </Card>

          <Card style={styles.card}>
            <View style={styles.cardItem2}>
              <View style={styles.cardItem}>
                <Text style={styles.title}>Perfil do dependente</Text>
                <Text style={styles.subtitle}>{'Insira abaixo os dados da criança'}</Text>
              </View>

              <Image source={require("../../assets/menininha.jpg")} style={styles.image} />
            </View>
            <Item style={styles.inputSpacing}>
              <Input style={styles.input} placeholder={"Nome da criança"}
                defaultValue={childrenName}
                onChangeText={value => setChildrenName(value)} />
            </Item>

            {childrenGender && <Item style={styles.inputSpacing}>
              <Picker note
                mode="dropdown"
                selectedValue={childrenGender}

                onValueChange={value => setChildrenGender(value)}>
                <Picker.Item label="Masculino" value="masculino" />
                <Picker.Item label="Feminino" value="feminino" />
                <Picker.Item label="Outro" value="outro" />
              </Picker>
            </Item>}
            <View style={[styles.datepicker, { marginTop: 20, color: "#ccc" }]}>
            <Label style={{ color: "#575757" }}>Data de nascimento:</Label>
              <DatePicker
                defaultDate={new Date(2020, 1, 1)}
                minimumDate={new Date(1900, 1, 1)}
                maximumDate={new Date()}
                androidMode={"spinner"}
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={setChildrenBirthday}
                disabled={false}
              />
            </View>
          </Card>

          <Button full rounded style={styles.button}
            onPress={(_) => {
              doSubmit(values, navigation);
            }}>
            <Text style={styles.textbutton}>Salvar</Text>
          </Button>
        </ImageBackground>
      </ScrollView>
    </ImageBackground>
  );
}

const doSubmit = (values, navigation) => {

  const userSchema = new UserSchema(values);

  UserService.update(userSchema, UserService.uid)
    .then((_) => {
      navigation.navigate('Home');
      //   console.log("dessa vez deu certo!!")
      // Alert.alert(
      //   "Dados cadastrais atualizados.",
      //   [
      //     {
      //       text: "OK",
      //       onPress: () => {
      //         navigation.navigate("Home");
      //       },
      //     },
      //   ],
      //   { cancelable: false }
      // );
    })
    .catch((errorCode) => {
      console.log("erro do krl", errorCode);
      Alert.alert(   "Erro",
      ErrorMessages[errorCode.toString()],
      [{ text: "OK", onPress: () => setLoading(false) }],
      { cancelable: false })
    });
};

const styles = StyleSheet.create({
  datepicker: {
    marginVertical: 10,
  },
  imageBackground: {
    flex: 1,
    padding: 14,
  },
  imageBackground0: {
    flex: 1,
  },
  card: {
    flex: 1,
    padding: 15,
    textAlign: "center",
    marginBottom: 15,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'column'
  },
  cardItem: {
    flexDirection: 'column',
    flex: 1,
  },
  cardItem2: {
    flexDirection: 'row',
    flex: 3,
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
  inputSpacingBlocked: {
    backgroundColor: "#FFF",
    marginBottom: 14,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 10,
    borderColor: "#000",
    elevation: 10,

  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 400,
    padding: 15,

  },

  input: {
    backgroundColor: "#f5f5f5",
    padding: 1,
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

  },
  subtitle: {
    padding: 5,
    color: "#798A9B",
    fontSize: 14,
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