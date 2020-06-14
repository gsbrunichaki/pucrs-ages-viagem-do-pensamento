import React, { useState } from "react";
import { Container, Content, Card, CardItem, Text, View } from "native-base";
import {
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";
import Emoji from "react-native-emoji";
import Loading from "../../components/Loading";
import CloudImageBackground from "../../components/CloudImageBackground";
import shadowCode from "../../components/shadowCode";
import Colors from "../../assets/Colors/Colors";
import PageBanner from "../../components/PageBanner";
import Breadcrumb from "../../components/Breadcrumb";
import TutorialModal from "../../components/TutorialModal";

import TutorialImage from "../../assets/tutorial4.png";

export default function TutorialReactions({ route, navigation }) {
  const { aircraft, island, thoughts } = route.params;

  const [behaviour, setBehaviour] = useState("");
  const [autoAnalysis, setAutoAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <Container style={style.container}>
      <CloudImageBackground>
        <Content style={style.content}>
          <Breadcrumb aircraft={aircraft} thoughts={thoughts} island={island} />
          <Card transparent style={style.firstCard}>
            <CardItem header style={style.firstCardItem}>
              <Text style={style.mainText}>
                Qual será a sua atitude na situação?
              </Text>
              <Text style={style.subtext}>
                Explique melhor o seu comportamento abaixo.
              </Text>
            </CardItem>
            <CardItem header bordered style={style.lastCardItem}>
              <TextInput
                style={style.TextInputStyleClass}
                underlineColorAndroid="transparent"
                placeholder={"Comportamento"}
                placeholderTextColor={"#9E9E9E"}
                numberOfLines={5}
                multiline={true}
                onChangeText={(value) => setBehaviour(value)}
              />
            </CardItem>
          </Card>

          <PageBanner title={"Como você acha que se comportou?"} />
          {autoAnalysis === null ? (
            <View style={style.buttons}>
              <TouchableOpacity
                style={style.thumbsUp}
                onPress={() =>
                  navigation.navigate("TutorialFeedback", {
                    autoAnalysis: "up",
                  })
                }
              >
                <Emoji name="+1" style={{ fontSize: 60 }} />
              </TouchableOpacity>
              <TouchableOpacity
                style={style.thumbsDown}
                onPress={() =>
                  navigation.navigate("TutorialFeedback", {
                    autoAnalysis: "down",
                  })
                }
              >
                <Emoji name="-1" style={{ fontSize: 60 }} />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={style.buttons}>
              <TouchableOpacity
                style={[
                  style.thumbsUp,
                  { borderColor: autoAnalysis === "up" ? "black" : "green" },
                ]}
                onPress={() =>
                  navigation.navigate("TutorialFeedback", {
                    autoAnalysis: "up",
                  })
                }
                first
                active={autoAnalysis === "up"}
              >
                <Emoji
                  name="+1"
                  style={{ fontSize: 60, borderColor: "black" }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  style.thumbsDown,
                  { borderColor: autoAnalysis === "down" ? "black" : "red" },
                ]}
                onPress={() =>
                  navigation.navigate("TutorialFeedback", {
                    autoAnalysis: "down",
                  })
                }
                last
                active={autoAnalysis === "down"}
              >
                <Emoji
                  name="-1"
                  style={{ fontSize: 60, borderColor: "black" }}
                />
              </TouchableOpacity>
            </View>
          )}
          <Loading loading={loading} />
          <TutorialModal image={TutorialImage}>
            <Text>
              Por fim, pensando desta forma que escreveu na camiseta e sentindo
              esta emoção, qual será sua ação? Escreva seu comportamento.
            </Text>
            <Text style={{ marginTop: 20 }}>E veja se ajudou ou não.</Text>
          </TutorialModal>
        </Content>
      </CloudImageBackground>
    </Container>
  );
}

const style = StyleSheet.create({
  button: {
    marginBottom: 30,
    marginTop: 1,
    marginHorizontal: 60,
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
    top: 10,
    ...shadowCode,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  thumbsUp: {
    backgroundColor: Colors.caribbeanGreen,
    borderRadius: 30,
    padding: 30,
    ...shadowCode,
  },
  thumbsDown: {
    backgroundColor: Colors.lightOrange,
    borderRadius: 30,
    padding: 30,
    ...shadowCode,
  },
  container: {
    backgroundColor: Colors.white,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingRight: 40,
    paddingLeft: 40,
    marginBottom: 20,
    ...shadowCode,
  },
  content: {
    display: "flex",
    flex: 1,
  },
  mainText: {
    display: "flex",
    fontSize: 26,
    lineHeight: 30,
    textAlign: "left",
    color: Colors.coffee,
    //fontFamily: 'Nunito'
  },
  subtext: {
    display: "flex",
    alignItems: "flex-start",
    fontSize: 15,
    lineHeight: 25,
    textAlign: "left",
    color: Colors.shadowGray,
    // fontFamily: "Nunito"
  },
  firstCard: {
    padding: 10,
    ...Platform.select({
      ios: {
        ...shadowCode,
      },
    }),
  },
  firstCardItem: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 25,
    paddingLeft: 30,
    paddingRight: 30,
    ...Platform.select({
      android: {
        ...shadowCode,
      },
    }),
  },
  firstCardItem2: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.white,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 25,
    paddingLeft: 30,
    paddingRight: 30,
    ...shadowCode,
  },
  cardItem: {
    backgroundColor: Colors.white,
  },
  lastCardItem: {
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: 40,
    paddingLeft: 30,
    paddingRight: 30,
    ...Platform.select({
      android: {
        ...shadowCode,
      },
    }),
  },
  card: {
    borderTopRightRadius: 20,
    paddingBottom: 10,
    paddingRight: 10,
  },
  TextInputStyleClass: {
    display: "flex",
    fontSize: 20,
    //textAlign: 'center',
    elevation: 3,
    ...shadowCode,
    // borderWidth: 2,
    // borderColor: "#9E9E9E",
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Platform.select({
      android: {
        height: 50,
      },
    }),
    padding: 10,
    width: "100%",
    //Dinamica
    // width: 380,
  },
});
