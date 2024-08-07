import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Butter from 'buttercms';

const App = () => {
  const butter = Butter('6e7fc0585176443eec5478d800b923aa5709d57b');
  const [data, setData] = useState([]);
  async function getPosts() {
    try {
      const response: any = await butter.post.list({page: 1, page_size: 10});
      console.log('response', response);
      setData(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);

  const _renderItem = ({item}: {item: any}) => {
    console.log('item', item);
    const {title, summary} = item;
    console.log('data', data);
    return (
      <View
        style={{
          borderWidth: 1,
          margin: 20,
          borderRadius: 20,
          overflow: 'hidden',
        }}>
        <Text
          style={{
            color: 'grey',
            overflow: 'hidden',
            borderRadius: 20,
            padding: 10,
          }}>
          <Text
            style={{
              color: 'red',
              fontSize: 28,
            }}>
            {title}
            {'\n'}
          </Text>
          {summary}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <FlatList
        data={data}
        renderItem={_renderItem}
        ListEmptyComponent={<Text>No data</Text>}
      />
      <Button title="Butter CMS" onPress={getPosts} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
