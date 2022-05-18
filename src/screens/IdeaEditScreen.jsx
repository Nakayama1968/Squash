/* eslint-disable react/prop-types */
// import { number } from 'prop-types';
import React, { useState } from 'react';
import {
  View, TextInput, StyleSheet, Alert, Text,
} from 'react-native';
import { shape, string } from 'prop-types';
import firebase from 'firebase';

import KeyboardSafeView from '../components/KeyboardSafeView ';
import { translateErrors } from '../utils';

import AppBar from '../components/AppBar';

import EditButton from '../components/EditButton';

export default function IdeaEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.paramas;
  const [body, setBody] = useState(bodyText);

  function handlePress() {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/ideas`).doc(id);
      ref.set({
        bodyText: body,
        updatedAt: new Date(),
      }, { merge: true })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          const errorMsg = translateErrors(error.code);
          Alert.alert(errorMsg.title, errorMsg.description);
        });
    }
  }

  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.container}>
        <AppBar />
        <View style={styles.pageTop}>
          <Text style={styles.pageName}>IdeaEdit</Text>
        </View>
        <View>
          <Text style={styles.ideaDate}>2020年12月24日 11:00</Text>
        </View>
        <View>
          <Text style={styles.ideaTitle}>Re:アイデアエディット</Text>
        </View>
        <View>
          <Text style={styles.ideaName}>Tsutomu Nakayama</Text>
        </View>
        <TextInput
          value={body}
          multiline
          style={styles.ideaText1}
          onChangeText={(text) => { setBody(text); }}
        />
        <EditButton
          style={{ right: 40, top: 'auto', bottom: 0 }}
          name="refresh"
          // eslint-disable-next-line react/jsx-no-bind
          onPress={handlePress}
        />
      </View>
    </KeyboardSafeView>
  );
}

IdeaEditScreen.propTypes = {
  route: shape({
    params: shape({ id: string, bodeText: string }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    borderTopWidth: 5,
    borderTopColor: '#26cb78',
  },
  inputContainer: {
    flex: 1,
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
