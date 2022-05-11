/* eslint-disable react/prop-types */
// import { number } from 'prop-types';
import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AppBar from '../components/AppBar';

import RacketButton from '../components/RacketButton';

export default function IdeaDetailScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.pageTop}>
        <Text style={styles.pageName}>IdeaContri</Text>
      </View>
      <View>
        <Text style={styles.ideaDate}>2020年12月24日 11:00</Text>
      </View>
      <View>
        <Text style={styles.ideaTitle}>Re:アイデアコントリ</Text>
      </View>
      <View>
        <Text style={styles.ideaName}>Tsutomu Nakayama</Text>
      </View>
      <ScrollView style={styles.ideaBody}>
        <TextInput style={styles.ideaText1} />
      </ScrollView>
      <RacketButton
        style={{ right: 40, top: 'auto', bottom: 0 }}
        name="tennis"
        onPress={() => { navigation.navigate('IdeaEdit'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ececec',
    borderTopWidth: 5,
    borderTopcolor: 'olivedrab',
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
  ideaDate: {
    color: '#999999',
    top: 5,
    fontSize: 12,
    lineHeight: 30,
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  ideaTitle: {
    color: '#333333',
    paddingHorizontal: 26,
    fontSize: 18,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  ideaName: {
    color: '#666666',
    paddingHorizontal: 28,
    fontSize: 14,
    lineHeight: 14,
  },
  ideaBody: {
    margin: 20,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    height: '55%',
  },
  ideaText1: {
    fontSize: 14,
    lineHeight: 24,
    padding: 13,
    borderRadius: 5,
  },
});
