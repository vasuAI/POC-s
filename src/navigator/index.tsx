import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {ScreenNames} from './screenNames';
import BottomTabNavigator from './bottomtab';
import SplashScreen from '../screens/splashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';

const Stack: any = createNativeStackNavigator();

const RootNavigator = () => {
  const navigationRef: any = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          component={SplashScreen}
          name={ScreenNames.Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Home}
          name={ScreenNames.Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={BottomTabNavigator}
          name={ScreenNames.BottomTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
