import React, { Component } from "react";

import { StyleSheet, ImageBackground } from "react-native";

export default class CloudImageBackground extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <ImageBackground source={require("../assets/cloud-background.png")} style={styles.imageBackground} imageStyle={styles.imageStyle}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    resizeMode: "repeat",
    alignSelf: "center"
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center"
  }
});