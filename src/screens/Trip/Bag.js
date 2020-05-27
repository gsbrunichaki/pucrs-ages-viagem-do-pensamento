import React, { Component } from "react";
import { View, PanResponder, Animated, Image, ImageBackground, StyleSheet, ImageComponent } from "react-native";
import { Text, Button } from "native-base";

export default function Bag({ route, navigation }) {
  const { aircraft } = route.params;
  return (
    <View style={styles.container}>

      <View style={styles.Bagimage}>
        <Image resizeMode={"center"} source={require("../../assets/bag.png")} style={styles.Bagimage} />
      </View>

      <Text style={styles.title}>Que pensamentos você levará na mala?</Text>

      <View style={styles.content} >
        <ImageBackground source={require("../../assets/ThinkingBoard.png")} style={styles.Boardimage}>
          <View style={styles.contentImage} >
            <View style={styles.content}>
              <Image source={require("../../assets/Emotions/Happy.png")} style={styles.Emotion} />
              <Image source={require("../../assets/Emotions/Covided.png")} style={styles.Emotion} />
            </View>
            <View style={styles.content} >
              <Image source={require("../../assets/Emotions/Proud.png")} style={styles.Emotion} />
              <Image source={require("../../assets/Emotions/Shamed.png")} style={styles.Emotion} />
            </View>
            <View style={styles.content} >
              <Image source={require("../../assets/Emotions/Sad.png")} style={styles.Emotion} />
              <Image source={require("../../assets/Emotions/Angry.png")} style={styles.Emotion} />
            </View>
            <View style={styles.content} >
              <Image source={require("../../assets/Emotions/Curious.png")} style={styles.Emotion} />
              <Image source={require("../../assets/Emotions/Crying.png")} style={styles.Emotion} />
            </View>
          </View>
        </ImageBackground>
      </View>
      <Button full rounded onPress={_ => { navigation.navigate("TripIslands", { aircraft, thoughts: ["t1", "t2", "t3"] }) }}>
        <Text>Continuar</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2CB3F2",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    marginTop: '1%',
    alignItems: "center",
    flexDirection: "column"
  },
  contentImage: {
    flex: 1,
    alignContent: "center",
    width: '100%',
    height: '100%',
    flexDirection: "row",
    // boar

  },
  Emotion: {

    flex: 0.43,
    width: "75%",
    height: "75%",
    resizeMode: 'contain',
    alignSelf: "center",

  },
  Bagimage: {
    flex: 1,
    alignItems: 'center',
    width: "90%",
    height: "90%",
    alignSelf: "center"
  },
  Boardimage: {
    flex: 1,
    width: "100%",
    height: "90%",
    resizeMode: 'contain',
    alignSelf: "center"


  },
  title: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: 'bold',
    margin: 1,
    textAlign: "center"
  },
});