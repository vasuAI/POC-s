import React, {useEffect, useState} from 'react';
import Butter from 'buttercms';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import butter from 'buttercms';
const SinglePage = () => {
  const butter = Butter('6e7fc0585176443eec5478d800b923aa5709d57b');
  const [data, setData] = useState([]);
  const navigation: any = useNavigation();
  async function getPageDetail() {
    try {
      const response: any = await butter.page.retrieve('*', 'hero-sample');
      console.log('response', response);
      setData(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getPageDetail();
  }, []);

  const {fields} = data;
  console.log('🚀 ~ SinglePage ~ fields:', fields);
  console.log('fields?.hero?.image', fields?.hero?.image);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{fontSize: 28, color: '#3b5998', alignSelf: 'center'}}>
        Butter CMS
      </Text>
      <View>
        <Text style={styles.heading}>{fields?.features?.headline}</Text>
        <Image style={styles.heroimage} source={{uri: fields?.hero?.image}} />
        <View style={styles.horizontal}>
          <TouchableOpacity style={styles.button}>
            {/* <Button
              title={fields?.hero?.button_label}
              onPress={() => {}}></Button> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Button title="Blog" onPress={() => {}}></Button>
          </TouchableOpacity>
        </View>
      </View>
      {/* <FlatList
        data={data}
        renderItem={_renderItem}
        ListEmptyComponent={<Text>No data</Text>}
      /> */}
      {/* <Button title="Butter CMS" onPress={getPageDetail} /> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  horizontal: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 14,
    fontFamily: 'Georgia',
    color: '#333333',
    paddingTop: 10,
  },
  heroimage: {
    width: 500,
    height: 500,
    padding: 20,
  },
  button: {
    margin: 20,
  },
});

export default SinglePage;
