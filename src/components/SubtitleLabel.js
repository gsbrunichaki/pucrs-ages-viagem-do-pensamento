import React from "react";
import {StyleSheet} from "react-native";
import Colors from "../assets/Colors/Colors";
import {Text} from "native-base";


export default function SubtitleLabel(props) {

  return (
    <Text style={styles.subtitle}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: Colors.shadowGray,
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: 20,
    display: "flex",
    alignItems: "flex-start",
    textAlign: "left",
    letterSpacing: -0.5
  }
});