import {View, Text, Button} from 'react-native';
import React from 'react';
import styles from './styles';
import strings from '../../utils/string';
import {ScreenNames} from '../../navigator/screenNames';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation: any = useNavigation();
  const navigate = () => {
    // navigation.navigate(ScreenNames.BottomTab, {screen: ScreenNames.Profile});
    navigation.navigate(
      ScreenNames.BottomTab,
      {screen: ScreenNames.Profile},
      {params},
    );
    navigation.navigate(
      ScreenNames.BottomTab,
      {screen: ScreenNames.Profile},
      params,
    );
    navigation.navigate(ScreenNames.BottomTab, {
      screen: ScreenNames.Profile,
      params,
    });
  };
  return (
    <View style={styles.root}>
      <Text>{strings.hello}</Text>
      <Button title="Go to Profile" onPress={navigate} />
    </View>
  );
};

export default Home;
