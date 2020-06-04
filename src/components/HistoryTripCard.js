import React, { Component } from "react";
import {Image, StyleSheet, FlatList, View} from "react-native";
import {Text, Card, Item } from "native-base";
import DateLib from "../lib/date"

export default class HistoryTrip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { trip } = this.props;
    return (
      <React.Fragment>
        <Card style={styles.cardDate}>
          <Text style={styles.textDate}>{DateLib.getDiaMesAno(trip.createDate.toDate())}</Text>
        </Card>
        <View style={styles.content}>
          <Card style={styles.card}>
            <View style={styles.cardItemContent}>
              {
                trip.autoAnalysis ?
                <Image source={require("../assets/Bad.png")} style={styles.checkmarkbad} />
                :
                <Image source={require("../assets/Good.png")} style={styles.checkmarkgood} />
              }
              <Item style={styles.cardItem2}>
                <Image source={require("../assets/Plane.png")} style={styles.image} />
                <Text style={styles.title}>{trip.aircraft}</Text>
              </Item>
            </View>

            <View style={[styles.cardItemContent]}>
              <Item style={styles.cardItem2}>
                <Image source={require("../assets/Thought.png")} style={styles.image} />
                <FlatList
                  numColumns={1}
                  data={trip.thoughts}
                  listKey={(item, index) => 'thougth' + index.toString()}
                  renderItem={({ item }) => <Text style={styles.title}>{item}</Text>}
                  style={{ overflow: "visible" }}
                />
              </Item>
            </View>

            <View style={styles.cardItemContent}> 
              <Item style={styles.cardItem2}>
                <Image source={require("../assets/Emotion.png")} style={styles.image} />
                <Text style={styles.title}>{trip.island}</Text>
              </Item>
            </View>

            <View style={styles.cardItemContent}>
              <Item style={styles.cardItem2}>
                <Image source={require("../assets/Action.png")} style={styles.image} />
                <Text style={styles.title}>{trip.behaviour}</Text>
              </Item>
            </View>
          </Card>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 14
  },
  card: {
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'column',
  },
  cardItemContent: {
    padding: 5,
  },
  cardItem: {
    flexDirection: 'column',
  },
  cardItem2: {
    flexDirection: 'row',
  },
  cardDate: {
    marginLeft: -1,
    marginTop: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginRight: 15,
  },
  textDate: {
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
    fontWeight: "bold",
  },
  image: {
    width: 20,
    height: 20,
    tintColor: "#2C73D5",
    resizeMode: "contain",
  },
  checkmarkgood: {
    width: 20,
    height: 20,
    tintColor: "#13C4A3",
    alignSelf: "flex-end",
    marginBottom: -20,
  },
  checkmarkbad: {
    width: 20,
    height: 20,
    tintColor: "#F75C03",
    alignSelf: "flex-end",
    marginBottom: -20,
  },
  title: {
    marginRight: 15,
    color: "#3F3232",
    fontSize: 20,
    marginLeft: 10,
    textAlign: "left",
    textAlignVertical: "center",
    justifyContent: "flex-start",
    alignSelf: 'flex-start',
  },
});