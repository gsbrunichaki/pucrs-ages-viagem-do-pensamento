import React, { useEffect, useState } from 'react';
import { AppLoading } from 'expo';
import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserService from "./src/services/User";

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import TripAircraft from './src/screens/Trip/Aircraft';
import TripBag from './src/screens/Trip/Bag';
import TripIslands from './src/screens/Trip/Islands';
import TripReactions from './src/screens/Trip/Reactions';
import Colors from "./src/assets/Colors/Colors";

console.disableYellowBox = true;

const Stack = createStackNavigator();
const { Screen, Navigator } = Stack;

export default function App() {
  const [isLogged, setLogged] = useState(UserService.isLogged);
  const [isFontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });

      setFontLoaded(true);
    })();
  }, []);

  const anonymousRoutes = (setLogged) => [
    <Screen name="Login" options={{ headerShown: false }}>
      {props => <Login {...props} setLogged={setLogged} />}
    </Screen>,
    <Screen
      name="Register"
      component={Register}
      options={{
        title: 'Cadastro',
      }}
    />
  ];

  const authenticatedRoutes = (setLogged) => [
    <Screen name="Home">
      {props => <Home {...props} setLogged={setLogged} />}
    </Screen>,
    
    <Screen name="TripAircraft" component={TripAircraft} options={{ title: 'Viagem' }} />,
    <Screen name="TripBag" component={TripBag} options={{ title: 'Mala de Pensamentos' }} />,
    <Screen name="TripIslands" component={TripIslands} options={{ title: 'Ilha das Emoções' }} />,
    <Screen name="TripReactions" component={TripReactions} options={{ title: 'Reações e Comportamento' }} />,
  ];

  if (!isFontLoaded) {
    return <AppLoading />;
  }

  return (
    <StyleProvider style={getTheme(commonColor)}>
      <NavigationContainer>
        <Navigator screenOptions={{
          headerStyle: {
            backgroundColor: Colors.brightNavyBlue,

          },
          headerTintColor: Colors.white,
        }}>
          {isLogged
            ? authenticatedRoutes(setLogged)
            : anonymousRoutes(setLogged)
          }
        </Navigator>
      </NavigationContainer>
    </StyleProvider>
  );
}
