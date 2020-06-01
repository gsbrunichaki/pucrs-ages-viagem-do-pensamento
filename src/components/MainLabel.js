import React from "react";
import {StyleSheet} from "react-native";
import Colors from "../assets/Colors/Colors";
import {Text} from "native-base";


export default function MainLabel(props) {

  return (
    <Text style={styles.title}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    display: "flex",
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 30,
    textAlign: "left",
    color: Colors.coffee,
    letterSpacing: -0.5
  }
});