import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../calendar/Home';
import Calendar from '../calendar';
import AgendaCalendarScreen from '../calendar/Agenda';
import TimelineCalendarScreen from '../calendar/TimelineCalendar';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Calendar Day" component={TimelineCalendarScreen} />
        <Stack.Screen name="Calendar Week" component={AgendaCalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
