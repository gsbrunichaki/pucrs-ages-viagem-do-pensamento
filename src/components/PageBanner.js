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
        { this.props.subtitle && <Text style={styles.subtitle}> {this.props.subtitle} </Text>}
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  cardTitle: {
    width: "95%",
    height: 105,
    backgroundColor: "#fff",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 15,
    marginTop: 20
  },
  title: {
    display: "flex",
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 30,
    textAlign: "left",
    color: Colors.coffee,
  },
  subtitle: {
    color: "#798A9B",
    fontSize: 14,
  }
});