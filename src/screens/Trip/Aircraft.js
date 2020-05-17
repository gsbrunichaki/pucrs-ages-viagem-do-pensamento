import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

import AircraftEnum from "../../enums/Aircraft";
import PageBanner from "../../components/PageBanner";
import IconTextButton from "../../components/IconTextButton";
import CloudImageBackground from "../../components/CloudImageBackground";

const airplanes = [
  {
    title: "Passado",
    subtitle: "São situações que já \naconteceram",
    image: require("../../assets/aviao1.png"),
    airplane: AircraftEnum.PAST
  },

  {
    title: "Presente", 
    subtitle: "São situações que \nestão acontecendo", 
    image: require("../../assets/aviao2.png"), 
    airplane: AircraftEnum.PRESENT
  },

  {
    title: "Futuro", 
    subtitle: "São situações que \nainda irão acontecer", 
    image: require("../../assets/aviao3.png"), 
    airplane: AircraftEnum.FUTURE
  }
];

export default function Aircraft({ navigation }) {
  return (
    <CloudImageBackground>
      <PageBanner title={'Em qual avião \ndeseja embarcar?'} subtitle={'Escolha em qual aviao voce deseja embarcar.'} />
      <View style={styles.container}>
        <View style={styles.content}>
          {airplanes.map(ap => {
            const { title, subtitle, image, airplane } = ap;

            return (
              <IconTextButton title={title}
                subtitle={subtitle}
                navigation={navigation}
                image={image}
                onPress={_ => { navigation.navigate("TripBag", { aircraft: airplane })}} />
            );
          })}
        </View>
      </View>
    </CloudImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  content: {
    margin: 20,
  }
});