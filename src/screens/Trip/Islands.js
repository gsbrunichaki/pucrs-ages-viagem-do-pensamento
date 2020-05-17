import React, { useEffect } from "react";
import { Image } from "react-native";
import {
  Card,
  CardItem,
  Body,
  Container,
  Content,
  Text,
} from "native-base";
import { FlatList, StyleSheet } from "react-native";

import IslandsEnum from "../../enums/Island";
import { TouchableOpacity } from "react-native-gesture-handler";

const islands = [
  { id: IslandsEnum.PRIDE, title: "Orgulho", image: require("../../assets/island.png") },
  { id: IslandsEnum.JEALOUS, title: "Ciúmes", image: require("../../assets/island.png") },
  { id: IslandsEnum.ANXIETY, title: "Ansiedade", image: require("../../assets/island.png") },
  { id: IslandsEnum.ANGER, title: "Raiva", image: require("../../assets/island.png") },
  { id: IslandsEnum.LOVE, title: "Amor", image: require("../../assets/island.png") },
  { id: IslandsEnum.SADNESS, title: "Tristeza", image: require("../../assets/island.png") },
  { id: IslandsEnum.DISGUSTED, title: "Nojo", image: require("../../assets/island.png") },
  { id: IslandsEnum.FEAR, title: "Medo", image: require("../../assets/island.png") },
  { id: IslandsEnum.GUILTY, title: "Culpa", image: require("../../assets/island.png") },
  { id: IslandsEnum.MISSING, title: "Saudade", image: require("../../assets/island.png") },
  { id: IslandsEnum.HAPPY, title: "Alegria", image: require("../../assets/island.png") },
  { id: IslandsEnum.SHAME, title: "Vergonha", image: require("../../assets/island.png") },
];

export default function Islands({ route, navigation }) {
  const { aircraft, thoughts } = route.params;

  useEffect(() => {
    if (!aircraft)
      return alert("Aircraft é obrigatória. Envie nos parameteros.");

    if (!thoughts)
      return alert("Thoughts (pensamentos) é obrigatório. Envie nos parameteros.");

    if (!Array.isArray(thoughts))
      return alert("Thoughts (pensamentos) precisa ser um array");
  }, [aircraft, thoughts]);

  return (
    <Container>
      <Content style={styles.screen}>
        <Text style={styles.title}>
          Como se sente em relação a este pensamento?
        </Text>
        <FlatList
          numColumns={2}
          data={islands}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <TouchableOpacity onPress={_ => { navigation.navigate("TripReactions", { aircraft, island: item.id, thoughts }) }}>
                <CardItem style={styles.cardItem}>
                  <Body style={styles.cardBody}>
                    <Image style={styles.image} source={item.image} />
                    <Text style={styles.imageTitle}>{item.title}</Text>
                  </Body>
                </CardItem>
              </TouchableOpacity>
            </Card>
          )}
        />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  title: {
    marginBottom: 20,
    fontSize: 22,
  },
  card: {
    flex: 1,
    borderRadius: 15,
  },
  cardItem: {
    borderRadius: 15,
  },
  cardBody: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  imageTitle: {
    fontSize: 18,
  },
});
