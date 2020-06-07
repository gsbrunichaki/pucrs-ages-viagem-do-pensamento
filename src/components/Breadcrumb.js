import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text, Card } from "native-base";

import MainLabel from "./MainLabel";

export default class Breadcrumb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { aircraft, island, thoughts } = this.props;
    return (
      <React.Fragment>
        <View style={styles.content}>
          <Card style={styles.card}>
            <View style={styles.cardItemContent}>
                <Image source={require("../assets/Plane.png")} style={styles.image} />
                <MainLabel>{aircraft}</MainLabel>
            </View>
            
            {thoughts &&
              <React.Fragment>
                <View style={styles.divider}></View>
                <View style={[styles.cardItemContent]}>
                    <Image source={require("../assets/Thought.png")} style={styles.image} />
                    <MainLabel>{thoughts}</MainLabel>
                </View>
              </React.Fragment>
            }

            {island &&
              <React.Fragment>
                <View style={styles.divider}></View>
                <View style={styles.cardItemContent}>  
                    <Image source={require("../assets/Emotion.png")} style={styles.image} />
                    <MainLabel>{island}</MainLabel>
                </View>
              </React.Fragment>
            }
          </Card>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: "#F4F4F4",
  },
  content: {
    paddingHorizontal: 10
  },
  card: {
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'column',
  },
  cardItemContent: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center'
  },
  cardItem: {
    flexDirection: 'column',
  },
  image: {
    width: 20,
    height: 20,
    tintColor: "#2C73D5",
    resizeMode: "contain",
    marginRight: 10
  },
});