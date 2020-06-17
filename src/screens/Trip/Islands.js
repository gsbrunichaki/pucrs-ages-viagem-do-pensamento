import React, { useEffect } from "react";
import { Image, ImageBackground } from "react-native";
import { Card, CardItem, Body, Content, Text } from "native-base";
import { FlatList, StyleSheet } from "react-native";

import IslandsEnum from "../../enums/Island";
import { TouchableOpacity } from "react-native-gesture-handler";
import CloudImageBackground from "../../components/CloudImageBackground";
import Colors from "../../assets/Colors/Colors";
import shadowCode from "../../components/shadowCode";
import Breadcrumb from "../../components/Breadcrumb";

const island = require("../../assets/island.png");
const islands = [
  {
    id: IslandsEnum.PRIDE.id,
    title: "Orgulho",
    image: require("../../assets/emoji/Proud.png"),
  },
  {
    id: IslandsEnum.JEALOUS.id,
    title: "Ciúmes",
    image: require("../../assets/emoji/Jealous.png"),
  },
  {
    id: IslandsEnum.ANXIETY.id,
    title: "Ansiedade",
    image: require("../../assets/emoji/Anxious.png"),
  },
  {
    id: IslandsEnum.ANGER.id,
    title: "Raiva",
    image: require("../../assets/emoji/Angry.png"),
  },
  {
    id: IslandsEnum.LOVE.id,
    title: "Amor",
    image: require("../../assets/emoji/Loving.png"),
  },
  {
    id: IslandsEnum.SADNESS.id,
    title: "Tristeza",
    image: require("../../assets/emoji/Sad.png"),
  },
  {
    id: IslandsEnum.DISGUSTED.id,
    title: "Nojo",
    image: require("../../assets/emoji/Disgusted.png"),
  },
  {
    id: IslandsEnum.FEAR.id,
    title: "Medo",
    image: require("../../assets/emoji/Fearful.png"),
  },
  {
    id: IslandsEnum.GUILTY.id,
    title: "Culpa",
    image: require("../../assets/emoji/Guilty.png"),
  },
  {
    id: IslandsEnum.LONGING.id,
    title: "Saudade",
    image: require("../../assets/emoji/Longing.png"),
  },
  {
    id: IslandsEnum.HAPPY.id,
    title: "Alegria",
    image: require("../../assets/emoji/Happy.png"),
  },
  {
    id: IslandsEnum.SHAME.id,
    title: "Vergonha",
    image: require("../../assets/emoji/Shy.png"),
  },
];

export default function TripIslands({ route, navigation }) {
  const { aircraft, thoughts } = route.params;

  useEffect(() => {
    if (!aircraft)
      return alert("Aircraft é obrigatória. Envie nos parameteros.");

    if (!thoughts)
      return alert(
        "Thoughts (pensamentos) é obrigatório. Envie nos parameteros."
      );
  }, [aircraft, thoughts]);

  return (
    <CloudImageBackground style={styles.screen}>
      <Content>
        <Breadcrumb aircraft={aircraft} thoughts={thoughts} />
        <Card transparent style={styles.headerCard}>
          <CardItem header style={styles.headerCardItem}>
            <Text style={styles.mainText}>
              Como se sente em relação a este pensamento?
            </Text>
          </CardItem>
        </Card>
        <FlatList
          numColumns={2}
          data={islands}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <TouchableOpacity
                onPress={(_) => {
                  navigation.navigate("TripReactions", {
                    aircraft,
                    island: item.id,
                    thoughts,
                  });
                }}
              >
                <CardItem style={styles.cardItem}>
                  <Body style={styles.cardBody}>
                    <ImageBackground style={styles.image} source={island}>
                      <Image style={styles.emoji} source={item.image} />
                    </ImageBackground>
                    <Text style={styles.imageTitle}>{item.title}</Text>
                  </Body>
                </CardItem>
              </TouchableOpacity>
            </Card>
          )}
          style={{ overflow: "visible", marginTop: 10 }}
        />
      </Content>
    </CloudImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 20,
    overflow: "visible",
  },
  title: {
    marginBottom: 20,
    fontSize: 22,
  },
  card: {
    flex: 1,
    borderRadius: 15,
    marginTop: 0,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    ...shadowCode,
  },
  mainText: {
    display: "flex",
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 30,
    textAlign: "left",
    color: Colors.coffee,
    //fontFamily: 'Nunito'
  },
  headerCard: {
    marginLeft: 0,
    marginRight: 10,
    marginTop: 15,
  },
  headerCardItem: {
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 25,
    backgroundColor: Colors.whitish,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    ...shadowCode,
  },
  cardItem: {
    borderRadius: 15,
    backgroundColor: Colors.brightNavyBlue,
  },
  cardBody: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 104,
    height: 104,
    marginTop: 15,
    marginBottom: 10,
  },
  emoji: {
    alignSelf: "center",
    marginTop: 28,
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
  },
});
