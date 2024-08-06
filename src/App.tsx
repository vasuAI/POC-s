import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import RootNavigator from './navigation/RootNavigator';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigator />
    </SafeAreaView>
  );
};

export default App;
