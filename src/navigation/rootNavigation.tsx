import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomMenu from '../screens/CustomMenu';
import App from '../../App';
import Home from '../screens/Home';
import SinglePage from '../screens/SinglePages';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SinglePage" component={SinglePage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CustomMenu" component={CustomMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
