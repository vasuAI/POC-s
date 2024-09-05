import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Butter from 'buttercms';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const butter = Butter('6e7fc0585176443eec5478d800b923aa5709d57b');
  const [data, setData] = useState([]);
  const navigation: any = useNavigation();
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
    const {title, summary, body, featured_image} = item;
    console.log('data', data);
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CustomMenu', {data: body});
        }}
        style={{
          flex: 1,
          borderWidth: 0.5,
          margin: 10,
          borderRadius: 20,
          overflow: 'hidden',
          flexDirection: 'row',
          paddingHorizontal: 10,
          backgroundColor: 'white',
        }}>
        <Image
          source={{uri: featured_image}}
          style={{width: 50, height: 50, borderRadius: 50, alignSelf: 'center'}}
        />
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
              fontSize: 16,
            }}>
            {title}
            {'\n'}
          </Text>
          {summary}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{fontSize: 28, color: '#3b5998', alignSelf: 'center'}}>
        Butter CMS
      </Text>
      <FlatList
        data={data}
        renderItem={_renderItem}
        ListEmptyComponent={<Text>No data</Text>}
      />
      {/* <Button title="Butter CMS" onPress={getPosts} /> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
