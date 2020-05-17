import React, { Component } from 'react';
import { Alert, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { titleHeader } = this.props;

    return (
      <View style={styles.header}>
            <TouchableOpacity style={styles.button} onPress={ _=> this.props.navigation.goBack() }>
              <Icon name='angle-left' type="FontAwesome" style={styles.icon}/>
            </TouchableOpacity>
            { titleHeader ? <Text style={styles.title}>{titleHeader}</Text> : <Text></Text> }
            <TouchableOpacity style={styles.button} onPress={ _=>  Alert.alert("Tela de configurações não implementada.")}>
              <Icon name='cog' type="Ionicons" style={styles.icon}/>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "transparent",
    color: "#000",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 25
  },
  button: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    color: "#000",
    fontSize: 18
  },
  icon: {
    color: "#000",
  },
});

export default CustomHeader;