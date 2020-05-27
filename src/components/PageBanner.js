import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../assets/Colors/Colors";

export default class PageBanner extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  
  render() {
    return (
      <View style={styles.cardTitle}>
        <Text style={styles.title}> {this.props.title} </Text>
        <Text style={styles.Subtitle}> {this.props.subtitle} </Text>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  cardTitle: {
    height: 125,
    backgroundColor: Colors.white,
    borderRadius: 20,
    justifyContent: "center",
    paddingLeft: 30,
  },
  title: {
    color: Colors.coffee,
    fontSize: 22,
    textAlign: "left",
  },
  Subtitle: {
    color: Colors.shadowGray,
    fontSize: 14,
  }
});