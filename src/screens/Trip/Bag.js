import React, { useState } from "react";
import { View, ImageBackground, StyleSheet, ScrollView } from "react-native";
import CloudImageBackground from "../../components/CloudImageBackground";
import PageBanner from "../../components/PageBanner";
import { Text, Button, Item, Input } from "native-base";

export default function Bag({ route, navigation }) {
  const { aircraft } = route.params;

  const [thought, setThought] = useState("");

  return (
    <CloudImageBackground>
      <Text> {aircraft} </Text>
      <PageBanner title={"Que pensamentos você levará na mala?"} />
      <View style={{ alignItems: "center" }}>
        <ImageBackground
          style={styles.shirt}
          resizeMode="contain"
          source={require("../../assets/shirt.png")}
        >
          <ScrollView>
            <Text style={styles.text}> {thought} </Text>
          </ScrollView>
        </ImageBackground>
      </View>
      <Item style={styles.inputSpacing}>
        <Input
          value={thought}
          placeholder="Pensamento"
          style={styles.input}
          onChangeText={(value) => {
            setThought(value);
          }}
        />
      </Item>

      <Button
        style={[styles.button, styles.button1]}
        full
        rounded
        onPress={() => {
          setThought("Nossa, legal ");
        }}
      >
        <Text>Nossa, legal</Text>
      </Button>

      <Button
        style={[styles.button, styles.button2]}
        full
        rounded
        onPress={() => {
          setThought("Humm, Ok ");
        }}
      >
        <Text>Humm, Ok.</Text>
      </Button>

      <Button
        style={[styles.button, styles.button3]}
        full
        rounded
        onPress={() => {
          setThought("Ah, não gostei ");
        }}
      >
        <Text>Ah, não gostei...</Text>
      </Button>

      <Button
        style={[styles.button, styles.button4]}
        full
        rounded
        onPress={(_) => {
          navigation.navigate("TripIslands", {
            aircraft,
            thoughts: [thought, "t2", "t3"],
          });
        }}
      >
        <Text>Continuar</Text>
      </Button>
    </CloudImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  button: {
    marginBottom: 10,
    marginHorizontal: 30,
  },

  button1: {
    backgroundColor: "#13C4A3",
  },
  button2: {
    backgroundColor: "#F1C30F",
  },
  button3: {
    backgroundColor: "#F75C03",
  },
  button4: {
    marginHorizontal: 80,
  },
  inputSpacing: {
    backgroundColor: "#FFF",
    borderBottomWidth: 0,
    borderRadius: 10,
    borderColor: "#000",
    elevation: 3,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    color: "#000",
  },
  shirt: {
    width: 256,
    height: 256,
    marginTop: 10,
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 70,
  },
  content: {
    flex: 1,
    marginTop: "1%",
    alignItems: "center",
    flexDirection: "column",
  },
  contentImage: {
    flex: 1,
    alignContent: "center",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    // boar
  },
  Emotion: {
    flex: 0.43,
    width: "75%",
    height: "75%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  Bagimage: {
    flex: 1,
    alignItems: "center",
    width: "90%",
    height: "90%",
    alignSelf: "center",
  },
  Boardimage: {
    flex: 1,
    width: "100%",
    height: "90%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    margin: 1,
    textAlign: "center",
  },
});
