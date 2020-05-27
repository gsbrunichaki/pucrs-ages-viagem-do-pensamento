import React from 'react';
import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';
import Colors from "../assets/Colors/Colors";

class Loading extends React.Component {
  render() {
    return (
      <Modal transparent visible={this.props.loading}>
        <View style={styles.modalBackground}>
          <ActivityIndicator
            size="large"
            color={Colors.blueJeans}
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: Colors.white,
    opacity: 0.4,
  },
});

export default Loading;
