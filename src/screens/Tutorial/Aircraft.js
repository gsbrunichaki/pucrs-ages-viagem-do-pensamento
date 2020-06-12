import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { Body, Button, Card, CardItem } from "native-base";
import Modal from "react-native-modal";

import AircraftEnum from "../../enums/Aircraft";
import PageBanner from "../../components/PageBanner";
import IconTextButton from "../../components/IconTextButton";
import CloudImageBackground from "../../components/CloudImageBackground";

import TutorialImage from "../../assets/tutorial1.png";

const airplanes = [
  {
    title: "Passado",
    subtitle: "São situações que já \naconteceram",
    image: require("../../assets/aviao1.png"),
    airplane: AircraftEnum.PAST,
  },

  {
    title: "Presente",
    subtitle: "São situações que \nestão acontecendo",
    image: require("../../assets/aviao2.png"),
    airplane: AircraftEnum.PRESENT,
  },

  {
    title: "Futuro",
    subtitle: "São situações que \nainda irão acontecer",
    image: require("../../assets/aviao3.png"),
    airplane: AircraftEnum.FUTURE,
  },
];

export default function Aircraft({ navigation }) {
  return (
    <CloudImageBackground>
      <PageBanner title={"Vamos embarcar em qual avião?"} />
      <View style={styles.container}>
        <View style={styles.content}>
          {airplanes.map((ap) => {
            const { title, subtitle, image, airplane } = ap;

            return (
              <IconTextButton
                title={title}
                subtitle={subtitle}
                navigation={navigation}
                image={image}
                onPress={(_) => {
                  navigation.navigate("TripBag", { aircraft: airplane });
                }}
              />
            );
          })}
        </View>
      </View>
      <Modal
        isVisible={true}
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
      >
        <Card>
          <CardItem>
            <Body style={{ alignItems: "center" }}>
              <Image
                source={TutorialImage}
                style={{
                  width: 200,
                  height: 200,
                  resizeMode: "contain",
                }}
              />
              <View style={{ marginVertical: 40 }}>
                <Text>
                  Quando vamos viajar em nossos pensamentos, podemos escolher o
                  tipo do avião.
                </Text>
                <Text>
                  Avião do passado, pensamentos que já aconteceram e ficam em
                  nossa cabeça.
                </Text>
                <Text>Avião do presente, pensamentos que são de agora.</Text>
                <Text>
                  E avião do futuro, pensamentos de situações que não
                  acontecerão ainda...
                </Text>
              </View>
              <Button
                full
                rounded
                onPress={() => {
                  alert("oi");
                }}
              >
                <Text>Ok, entendi</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Modal>
    </CloudImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  content: {
    margin: 20,
  },
});
