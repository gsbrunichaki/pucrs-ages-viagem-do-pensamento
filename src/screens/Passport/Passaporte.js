import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Historico from './Historico';
import Perfil from './Perfil';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>

      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Perfil') {
              return (
                <Ionicons
                  name={focused ? 'ios-contact' : 'ios-contact'}
                  size={size}
                  color={color}
                />
              );
            }
            if (route.name === 'Historico') {
              return (
                <Ionicons
                  name={focused ? 'ios-list' : 'ios-list'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2C73D5',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Perfil" component={Perfil} />
        <Tab.Screen name="Historico" component={Historico} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navStyle: {
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40
  },
});