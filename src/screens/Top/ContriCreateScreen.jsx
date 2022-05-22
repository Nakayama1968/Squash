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

import { translateErrors } from '../../utils';
import RacketButton from '../../components/RacketButton';
import BottomBar from '../../components/BottomBar';

export default function ContriCreateScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');
  const [contentText, setContentText] = useState('');

  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/ideas`);
    ref.add({
      bodyText,
      contentText,
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
    <>
      <KeyboardSafeView style={styles.container}>
        <AppBar />
        <View style={styles.pageTop}>
          <Text style={styles.pageName}>ContriCreate</Text>
        </View>
        {/* <View>
<Text style={styles.ideaDate}>2020年12月24日 11:00</Text>
</View> */}
        <View>
          <Text style={styles.ideaTitle}>貢献リクエスト</Text>
        </View>
        <View>
          <Text style={styles.ideaName}>Title</Text>
        </View>
        <TextInput
          value={bodyText}
          style={styles.contriTitle}
          onChangeText={(text) => { setBodyText(text); }}
          autoFocus
        />
        <ScrollView style={styles.ideaBody}>
          <TextInput
            value={contentText}
            multiline
            style={styles.ideaText1}
            onChangeText={(text) => { setContentText(text); }}
          />
        </ScrollView>
        <RacketButton
          style={{ left: '80%', bottom: 40 }}
          name="tennis"
        // eslint-disable-next-line react/jsx-no-bind
          onPress={handlePress}
        />
      </KeyboardSafeView>
      <BottomBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ececec',
    borderTopWidth: 5,
    borderTopColor: 'yellowgreen',
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
  contriTitle: {
    top: 5,
    marginHorizontal: 20,
    fontSize: 15,
    backgroundColor: '#ffffff',
    lineHeight: 18,
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 8,
  },
  ideaText1: {
    fontSize: 14,
    lineHeight: 24,
    padding: 13,
    borderRadius: 5,
  },
});
