/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {changeIcon, getIcon} from 'react-native-change-icon';

function App(): React.JSX.Element {
  const onPressIcon = (item: any) => () => {
    changeIcon(item.iconName);
    setAppDefaultIcon(item.iconName);
  };
  const [appDefaultIcon, setAppDefaultIcon] = useState('');

  async function getCurrentIcon() {
    try {
      const res: any = await getIcon();
      setAppDefaultIcon(res);
    } catch (error) {}
  }

  useEffect(() => {
    getCurrentIcon();
  }, []);

  const renderItem = ({item}: {item: {name: string; iconName: string}}) => {
    return (
      <TouchableOpacity
        onPress={onPressIcon(item)}
        style={{
          marginVertical: 10,
          borderRadius: 10,
          marginHorizontal: 30,
          borderWidth: 2,
          borderColor: '#CAD0EA',
          paddingVertical: 20,
          alignContent: 'center',
          justifyContent: 'center',
          backgroundColor:
            appDefaultIcon === item.iconName ? '#d1cdea' : '#CAD0EA40',
        }}>
        <Text style={{alignSelf: 'center', fontWeight: '800'}}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 26,
          color: '#8d97a4',
        }}>
        Change APP Icon
      </Text>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
}
export default App;

const data = [
  {name: 'Zomato', iconName: 'logo_1'},
  {name: 'Swiggy', iconName: 'logo_2'},
  {name: 'Insta-Mart', iconName: 'logo_3'},
];
