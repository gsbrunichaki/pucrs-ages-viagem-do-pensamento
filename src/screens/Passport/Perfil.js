import React, { useEffect, useState } from "react";
import moment from "moment";
import { ImageBackground, StyleSheet, ScrollView, Alert } from "react-native";
import { Text, Button, View, Card, Input, Item, Picker, DatePicker, Label } from "native-base";
import UserService from "../../services/User";
import UserSchema from "../../schemas/UserUpdate";
import LibDate from "../../lib/date";

export default function Perfil({ navigation }) {

  const [user, setUser] = useState(null);
  const [name, setName] = useState(null);
  const [city, setCity] = useState(null);
  const [email, setEmail] = useState(null);
  const [childrenName, setChildrenName] = useState(null);
  const [childrenGender, setChildrenGender] = useState(null);
  const [childrenBirthday, setChildrenBirthday] = useState(null);

  const values = {
    name,
    childrenGender,
    childrenName,
    childrenBirthday,
    city
  };

  useEffect(() => {
    UserService.getUserData()
      .then(u => {
        setUser(u);
        setName(u.name);
        setCity(u.city);
        setEmail(u.email);
        setChildrenName(u.childrenName);
        setChildrenGender(u.childrenGender);
        setChildrenBirthday(u.childrenBirthday.toDate());
      })
      .catch(err => {
        console.error(err);
        Alert.alert("Erro", "Ocorreu um erro ao ler os dados cadastrais do seu perfil");
      })
  }, []);

  console.log("email?", UserService.email);

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
            <Label style={{ marginBottom: 10, color: "#8E8E8E" }}>Nome:</Label>
            <Item style={styles.inputSpacing}>
              <Input style={styles.input} placeholder={"Ex: Pedro Henrique"}
                defaultValue={name}
                onChangeText={value => setName(value)} />
            </Item>
            <Label style={{ marginBottom: 10, color: "#8E8E8E" }}>Cidade:</Label>
            <Item style={styles.inputSpacing}>
              <Input style={styles.input} placeholder={"Ex: Porto Alegre"}
                defaultValue={city}
                onChangeText={value => setCity(value)} />
            </Item>
            <Label style={{ marginBottom: 10, color: "#8E8E8E" }}>E-mail:</Label>
            <Item style={styles.inputSpacing}>
              <Input style={styles.inputLocked} defaultValue={UserService.email} disabled={true}/>
            </Item>
          </Card>

          <Card style={styles.card}>
            <View style={styles.cardItem2}>
              <View style={styles.cardItem}>
                <Text style={styles.title}>Perfil do dependente</Text>
                <Text style={styles.subtitle}>{'Insira abaixo os dados da criança'}</Text>
              </View>
            </View>
            <Label style={{ marginBottom: 10, color: "#8E8E8E" }}>Nome:</Label>
            <Item style={styles.inputSpacing}>
              <Input style={styles.input} placeholder={"Nome da criança"}
                defaultValue={childrenName}
                onChangeText={value => setChildrenName(value)} />
            </Item>
            <Label style={{ marginBottom: 10, color: "#8E8E8E" }}>Gênero:</Label>
            {childrenGender &&
              <Picker note
                mode="dropdown"
                selectedValue={childrenGender}
                style={{ color: '#000' }}
                onValueChange={value => setChildrenGender(value)}>
                <Picker.Item label="Masculino" value="masculino" />
                <Picker.Item label="Feminino" value="feminino"/>
                <Picker.Item label="Outro" value="outro" />
              </Picker>
            }
            
            <View style={[styles.datepicker]}>
              <Label style={{ color: "#8E8E8E" }}>Data de nascimento:</Label>
              {childrenBirthday !== null &&
              <DatePicker
                defaultDate={childrenBirthday}
                minimumDate={new Date(1900, 1, 1)}
                maximumDate={new Date()}
                androidMode={"spinner"}
                onDateChange={setChildrenBirthday}
                disabled={false}
              />}
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
      Alert.alert("Sucesso", "Dados cadastrais atualizados com sucesso!",
        [
          {
            text: "OK",
            onPress: () => {
            },
          },
        ],
        { cancelable: false }
      );
    })
    .catch(error => {
      Alert.alert("Erro", error.toString(),
        [{ text: "OK"}],
        { cancelable: false })
    });
};

const styles = StyleSheet.create({
  datepicker: {
    marginVertical: 10,
    color: "#000"
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
  inputLocked: {
    backgroundColor: "#C7C7C7",
    padding: 1,
    textAlign: "left",
    color: "#777777",
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
    paddingTop: 5,
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