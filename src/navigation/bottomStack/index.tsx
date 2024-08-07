import React from 'react';
import {Text, Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import styles from './styles';
import {images} from '../../assets';
import Home from '../../variants/variant-alpha/home';
import Settings from '../../variants/variant-alpha/Settings';
import More from '../../variants/variant-alpha/More';
import {ScreenNamesAlpha} from '../../variants/variant-alpha/screenNames';

const Tab = createBottomTabNavigator();

function TextLabel(focused: any, route: any) {
  const {name} = route;
  return (
    <Text
      style={[
        styles.textStyle,
        {
          color: focused ? '#005C84' : 'grey',
        },
      ]}>
      {name}
    </Text>
  );
}

function ImageLabel(iconName: any) {
  return (
    <Image
      source={iconName}
      resizeMode="contain"
      resizeMethod="resize"
      style={styles.iconStyle}
    />
  );
}

function BottomStack() {
  return (
    <View style={styles.con}>
      <Tab.Navigator
        screenOptions={({route}: any) => ({
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarItemStyle: {
            backgroundColor: 'white',
          },
          tabBarLabel: ({focused}) => {
            return TextLabel(focused, route);
          },
          tabBarIcon: ({focused}) => {
            let iconName;

            switch (route.name) {
              case ScreenNamesAlpha.Home:
                iconName = focused ? images.homeEnable : images.homeDisable;

                break;
              case ScreenNamesAlpha.Settings:
                iconName = focused ? images.helpEnable : images.helpDiasble;

                break;
              case ScreenNamesAlpha.More:
                iconName = focused ? images.moreEnable : images.moreDiasble;

                break;

              default:
                break;
            }
            return ImageLabel(iconName);
          },
        })}>
        <Tab.Screen
          options={{
            tabBarLabel: ScreenNamesAlpha.Home,
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarActiveTintColor: '#005C84',
          }}
          name={ScreenNamesAlpha.Home}
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ScreenNamesAlpha.Settings,
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarActiveTintColor: '#005C84',
          }}
          name={ScreenNamesAlpha.Settings}
          component={Settings}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ScreenNamesAlpha.More,
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarActiveTintColor: '#005C84',
          }}
          name={ScreenNamesAlpha.More}
          component={More}
        />
      </Tab.Navigator>
    </View>
  );
}

export default BottomStack;
