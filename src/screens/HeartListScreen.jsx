/* eslint-disable react/prop-types */
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import IdeaCard from '../components/IdeaCard';
import AppBar from '../components/AppBar';
import BottomBar from '../components/BottomBar';
import RankingButton from '../components/RankingButton';

export default function HeartListScreen(props) {
  // eslint-disable-next-line no-unused-vars
  const { navigation } = props;

  return (
    <>
      <View style={styles.container}>
        <AppBar />
        <View style={styles.pageTop}>
          <Text style={styles.pageName}>HeartRanking</Text>
        </View>
        <IdeaCard />
        <IdeaCard />
        <RankingButton
          name="star"
          onPress={() => { navigation.navigate('StarList'); }}
        />
        <RankingButton
          name="heart"
          onPress={() => { navigation.navigate('HeartList'); }}
        />
        <RankingButton
          name="tennis"
          onPress={() => { navigation.navigate('ContriList'); }}
        />
        <RankingButton
          name="people"
          onPress={() => { navigation.navigate('PracticeList'); }}
        />
        <RankingButton />
        <Text style={styles.pageTitle}>共感ランキング</Text>
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
    borderTopColor: 'hotpink',
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
    paddingHorizontal: 40,
    fontSize: 18,
    fontStyle: 'bold',
  },
});
