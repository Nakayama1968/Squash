/* eslint-disable react/prop-types */
// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import MessageCard from '../../components/MessageCard';
// import StarButton from '../../components/StarButton';
// import HeartButton from '../../components/HeartButton';
// import RacketButton from '../../components/RacketButton';
// import HandsOnButton from '../../components/HandsOnButton';
// import RankingButton from '../../components/RankingButton';
import AppBar from '../../components/AppBar';
import BottomBar from '../../components/BottomBar';

export default function MessageScreen(props) {
  // eslint-disable-next-line no-unused-vars
  const { navigation } = props;
  const [search, setSearch] = useState('');

  return (
    <>
      <View style={styles.container}>
        <AppBar />
        <View style={styles.pageTop}>
          <Text style={styles.pageName}>Message</Text>
        </View>
        <TextInput
          style={styles.input}
          value={search}
          onChangeText={(text) => { setSearch(text); }}
          autoCapitalize="none"
          placeholder="Search"
          textContentType="none"
        />
        <MessageCard />
        <View>
          {/* <StarButton
            name="star"
            onPress={() => { navigation.navigate('StarList'); }}
          />
          <HeartButton
            name="heart"
            onPress={() => { navigation.navigate('HeartList'); }}
          />
          <RacketButton
            name="tennis"
            onPress={() => { navigation.navigate('ContriList'); }}
          />
          <HandsOnButton
            name="people"
            onPress={() => { navigation.navigate('PracticeList'); }}
          />
          <RankingButton /> */}
        </View>
        <Text style={styles.pageTitle}>メッセージ</Text>
      </View>
      <View>
        <BottomBar />
      </View>

    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    borderTopWidth: 5,
    borderTopColor: '#9e887b',
  },
  input: {
    top: 15,
    padding: 10,
    marginHorizontal: '3%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },
  pageTop: {
    height: 50,
    backgroundColor: '#ffffff',
    borderBottomRightRadius: 30,
  },
  pageName: {
    color: '#333333',
    paddingHorizontal: 26,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: 'bold',
  },
  pageTitle: {
    position: 'absolute',
    top: 200,
    paddingHorizontal: '8%',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
