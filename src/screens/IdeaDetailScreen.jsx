/* eslint-disable react/prop-types */
// import { number } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';

import firebase from 'firebase';

import AppBar from '../components/AppBar';
import HandsOnButton from '../components/HandsOnButton';
import HeartButton from '../components/HeartButton';
import RacketButton from '../components/RacketButton';
import { dateToString } from '../utils';
import BottomBar from '../components/BottomBar';

export default function IdeaDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  // console.log(id);
  const [idea, setIdea] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/ideas`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        // console.log(doc.id, doc.data());
        const data = doc.data();
        setIdea({
          id: doc.id,
          bodyText: data.bodyText,
          contentText: data.contentText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return unsubscribe;
  }, []);

  return (
    <>
      <View style={styles.container}>
        <AppBar />
        <View style={styles.pageTop}>
          <Text style={styles.pageName}>アイディア・ディティール</Text>
        </View>
        <ScrollView style={styles.ideaBody}>
          <Text style={styles.ideaTitle}>{idea && idea.bodyText}</Text>
          <Text style={styles.ideaDate}>{idea && dateToString(idea.updatedAt)}</Text>
          <Text style={styles.ideaText}>{idea && idea.contentText}</Text>
        </ScrollView>
        <View>
          <HeartButton
            style={{ left: 40, top: 'auto', bottom: 0 }}
            name="heart"
            onPress={() => { navigation.navigate('IdeaCreate'); }}
          />
          <RacketButton
            style={{ right: 100, top: 'auto', bottom: 40 }}
            name="tennis"
            onPress={() => { navigation.navigate('IdeaCreate'); }}
          />
          <HandsOnButton
            style={{ right: 40, top: 'auto', bottom: 0 }}
            name="people"
            onPress={() => { navigation.navigate('IdeaHands'); }}
          />
        </View>
      </View>
      <BottomBar />
    </>
  );
}

IdeaDetailScreen.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ececec',
    borderTopWidth: 5,
    borderTopColor: '#9E887B',
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
    lineHeight: 32,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  ideaTitle: {
    color: '#333333',
    paddingHorizontal: 8,
    fontSize: 18,
    top: 8,
    fontWeight: 'bold',
  },
  ideaBody: {
    margin: 20,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    height: '90%',
    bottom: 20,
  },
  ideaText: {
    fontSize: 14,
    lineHeight: 24,
    padding: 20,
  },
});
