import {View, Text, Button} from 'react-native';
import React from 'react';
import styles from '../home/styles';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigator/screenNames';

const Profile = () => {
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate(ScreenNames.Home);
  };
  return (
    <View style={styles.root}>
      <Text>Profile</Text>
      <Button title="Go to Home" onPress={navigate} />
    </View>
  );
};

export default Profile;
