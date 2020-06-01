import React from "react";
import {StyleSheet} from "react-native";
import Colors from "../assets/Colors/Colors";
import {Card, CardItem} from "native-base";
import shadowCode from "./shadowCode";

export default function MainLabel(props) {

  return (
    <Card transparent style={styles.card}>
      <CardItem header style={styles.cardItem}>
        {props.children}
      </CardItem>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginLeft: 0,
    marginRight: 10,
    marginTop: 15,
  },
  cardItem: {
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 25,
    backgroundColor: Colors.whitish,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    ...shadowCode,
  },
});