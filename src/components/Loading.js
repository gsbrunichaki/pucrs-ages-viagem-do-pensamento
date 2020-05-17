import React from 'react';
import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';

class Loading extends React.Component {
  render() {
    return (
      <Modal transparent visible={this.props.loading}>
        <View style={styles.modalBackground}>
          <ActivityIndicator
            size="large"
            color={"#0078ff"}
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
    backgroundColor: '#00000040',
  },
});

export default Loading;
