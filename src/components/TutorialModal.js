import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Modal from "react-native-modal";
import { Body, Button, Card, CardItem } from "native-base";
import Colors from "../assets/Colors/Colors";

export default function TutorialModal({ image, children }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log(image);
  });

  useEffect(() => {
    console.log("MODAL", visible);
  }, [visible]);

  return (
    <Modal
      isVisible={visible}
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
              source={image}
              style={{
                width: 200,
                height: 200,
                resizeMode: "contain",
              }}
            />
            <View style={{ marginVertical: 40 }}>{children}</View>
            <Button onPress={() => setVisible(false)} full rounded>
              <Text style={styles.loginButtonText}>Ok, Entendi</Text>
            </Button>
          </Body>
        </CardItem>
      </Card>
    </Modal>
  );
}

const styles = StyleSheet.create({
  loginButtonText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
});
