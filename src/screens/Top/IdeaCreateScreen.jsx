/* eslint-disable react/prop-types */
// import { number } from 'prop-types';
import React, { useState } from 'react';
import {
  View, ScrollView, Text, StyleSheet, Alert,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from 'firebase';

import AppBar from '../../components/AppBar';
import KeyboardSafeView from '../../components/KeyboardSafeView ';

import StarButton from '../../components/StarButton';
import { translateErrors } from '../../utils';

export default function IdeaCreateScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');

  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/ideas`);
    ref.add({
      bodyText,
      updatedAt: new (Date)(),
    })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      });
  }

  return (

    <KeyboardSafeView style={styles.container}>
      <AppBar />
      <View style={styles.pageTop}>
        <Text style={styles.pageName}>IdeaCreate</Text>
      </View>
      <View>
        <Text style={styles.ideaDate}>2020年12月24日 11:00</Text>
      </View>
      <View>
        <Text style={styles.ideaTitle}>アイデアクリエイト</Text>
      </View>
      <View>
        <Text style={styles.ideaName}>Tsutomu Nakayama</Text>
      </View>
      <ScrollView style={styles.ideaBody}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.ideaText1}
          onChangeText={(text) => { setBodyText(text); }}
          autoFocus
        />
      </ScrollView>
      <StarButton
        style={{ left: 310, bottom: 40 }}
        name="star"
        // eslint-disable-next-line react/jsx-no-bind
        onPress={handlePress}
      />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ececec',
    borderTopWidth: 5,
    borderTopColor: 'deepskyblue',
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
  ideaDate: {
    color: '#999999',
    top: 5,
    fontSize: 12,
    lineHeight: 30,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  ideaTitle: {
    color: '#333333',
    paddingHorizontal: 23,
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
