/* eslint-disable react/prop-types */
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import IdeaCard from '../../components/IdeaCard';
import HeartButton from '../../components/HeartButton';
import StarButton from '../../components/StarButton';
import RacketButton from '../../components/RacketButton';
import HandsOnButton from '../../components/HandsOnButton';
import AppBar from '../../components/AppBar';
import BottomBar from '../../components/BottomBar';
import RankingButton from '../../components/RankingButton';

export default function IdeaListScreen(props) {
  // eslint-disable-next-line no-unused-vars
  const { navigation } = props;

  return (
    <>
      <View style={styles.container}>
        <AppBar />
        <View style={styles.pageTop}>
          <Text style={styles.pageName}>IdeaList</Text>
        </View>
        <IdeaCard />
        <StarButton
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
        <RankingButton />
        <Text style={styles.pageTitle}>新着アイデア</Text>
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
    top: 160,
    paddingHorizontal: '8%',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
