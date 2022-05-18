/* eslint-disable react/prop-types */
// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import IdeaCard from '../../components/Card/PracCard';
import AppBar from '../../components/AppBar';
import BottomBar from '../../components/BottomBar';

export default function MyProjectScreen(props) {
  // eslint-disable-next-line no-unused-vars
  const { navigation } = props;
  const [search, setSearch] = useState('');

  return (
    <>
      <View style={styles.container}>
        <AppBar />
        <View style={styles.pageTop}>
          <Text style={styles.pageName}>MyIdeas</Text>
        </View>
        <TextInput
          style={styles.input}
          value={search}
          onChangeText={(text) => { setSearch(text); }}
          autoCapitalize="none"
          placeholder="Search"
          textContentType="none"
        />
        <View style={styles.baseStyle}>
          <IdeaCard ideas={ideas} />
        </View>
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
        <Text style={styles.pageTitle}>プロジェクト一覧</Text>
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
    borderTopColor: 'deepskyblue',
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
    paddingHorizontal: 23,
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
