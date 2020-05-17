import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

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
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    paddingLeft: 30,
  },
  title: {
    color: "#3F3232",
    fontSize: 22,
    textAlign: "left",
  },
  Subtitle: {
    color: "#798A9B",
    fontSize: 14,
  }
});