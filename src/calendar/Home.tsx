import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {lightThemeColor, themeColor} from '../mocks/theme';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation: any = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: lightThemeColor,
      }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Calendar Day')}
        style={{
          borderWidth: 1,
          borderColor: 'grey',
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: themeColor,
          marginBottom: 20,
        }}>
        <Text>Calendar Type Day</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Calendar Week')}
        style={{
          borderWidth: 1,
          borderColor: 'grey',
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: themeColor,
          marginBottom: 20,
        }}>
        <Text>Calendar Type Week</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Big Calendar')}
        style={{
          borderWidth: 1,
          borderColor: 'grey',
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: themeColor,
          marginBottom: 20,
        }}>
        <Text>Big Calendar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
