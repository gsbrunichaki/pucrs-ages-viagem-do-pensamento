import React, { useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Body, Button, Card, CardItem } from "native-base";
import Modal from "react-native-modal";
import Colors from "../../assets/Colors/Colors";

import AircraftEnum from "../../enums/Aircraft";
import PageBanner from "../../components/PageBanner";
import IconTextButton from "../../components/IconTextButton";
import CloudImageBackground from "../../components/CloudImageBackground";
import TutorialModal from "../../components/TutorialModal";

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

export default function TutorialAircraft({ navigation }) {
  const [isVisible, setIsVisible] = useState(true);

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
                  navigation.navigate("TutorialBag", { aircraft: airplane });
                }}
              />
            );
          })}
        </View>
      </View>
      <TutorialModal image={TutorialImage}>
        <Text>
          Quando vamos viajar em nossos pensamentos, podemos escolher o tipo do
          avião.
        </Text>
        <Text>
          Avião do passado, pensamentos que já aconteceram e ficam em nossa
          cabeça.
        </Text>
        <Text>Avião do presente, pensamentos que são de agora.</Text>
        <Text>
          E avião do futuro, pensamentos de situações que não aconteceram
          ainda...
        </Text>
      </TutorialModal>
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
  loginButtonText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
});
