import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text, Card } from 'native-base';
import DateLib from '../lib/date';
import Colors from '../assets/Colors/Colors';

import Islands from '../enums/Island';

export default class HistoryTrip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { trip } = this.props;
    return (
      <React.Fragment>
        <Card style={styles.cardDate}>
          <Text style={styles.textDate}>
            {DateLib.getDiaMesAno(trip.createDate.toDate())}
          </Text>
        </Card>
        <View style={styles.content}>
          <Card style={styles.card}>
            <View style={styles.cardItemContent}>
              <Image
                source={require('../assets/Plane.png')}
                style={styles.image}
              />
              <Text style={styles.title}>{trip.aircraft}</Text>

              <View style={styles.contentAutoAnalisys}>
                {trip.autoAnalysis ? (
                  <Image
                    source={require('../assets/Bad.png')}
                    style={styles.checkmarkbad}
                  />
                ) : (
                  <Image
                    source={require('../assets/Good.png')}
                    style={styles.checkmarkgood}
                  />
                )}
              </View>
            </View>

            <View style={styles.divider}></View>

            <View style={[styles.cardItemContent]}>
              <Image
                source={require('../assets/Thought.png')}
                style={styles.image}
              />
              <Text style={styles.title}>{trip.thoughts}</Text>
            </View>

            <View style={styles.divider}></View>

            <View style={styles.cardItemContent}>
              <Image
                source={require('../assets/Emotion.png')}
                style={styles.image}
              />
              <Text style={styles.title}>
                {Islands[trip.island.toUpperCase()].description}
              </Text>
            </View>

            <View style={styles.divider}></View>

            <View style={styles.cardItemContent}>
              <Image
                source={require('../assets/Action.png')}
                style={styles.image}
              />
              <Text style={styles.title}>{trip.behaviour}</Text>
            </View>
          </Card>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.whitish,
  },
  content: {
    paddingHorizontal: 10,
  },
  contentAutoAnalisys: {
    flex: 1,
    alignItems: 'flex-end',
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
    alignItems: 'center',
  },
  cardItem: {
    flexDirection: 'column',
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
    fontWeight: 'bold',
  },
  image: {
    width: 20,
    height: 20,
    tintColor: Colors.brightNavyBlue,
    resizeMode: 'contain',
    marginRight: 10,
  },
  checkmarkgood: {
    width: 20,
    height: 20,
    tintColor: Colors.caribbeanGreen,
  },
  checkmarkbad: {
    width: 20,
    height: 20,
    tintColor: Colors.orange,
  },
  title: {
    marginRight: 15,
    color: '#3F3232',
    fontSize: 20,
    marginLeft: 10,
    textAlign: 'left',
    textAlignVertical: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
});
