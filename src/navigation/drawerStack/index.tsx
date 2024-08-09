import React from 'react';
import {Text, Image, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import styles from './styles';
import {images} from '../../assets';
import Home from '../../module/home';
import Settings from '../../module/Settings';
import More from '../../module/More';
import {ScreenNames} from '../screenNames';

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

function DrawerStack() {
  const Tab = createDrawerNavigator();
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
              case ScreenNames.Home:
                iconName = focused ? images.homeEnable : images.homeDisable;

                break;
              case ScreenNames.Settings:
                iconName = focused ? images.helpEnable : images.helpDiasble;

                break;
              case ScreenNames.More:
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
            tabBarLabel: ScreenNames.Home,
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarActiveTintColor: '#005C84',
          }}
          name={ScreenNames.Home}
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ScreenNames.Settings,
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarActiveTintColor: '#005C84',
          }}
          name={ScreenNames.Settings}
          component={Settings}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ScreenNames.More,
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarActiveTintColor: '#005C84',
          }}
          name={ScreenNames.More}
          component={More}
        />
      </Tab.Navigator>
    </View>
  );
}

export default DrawerStack;
