/* eslint-disable react/prop-types */
// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Text, Alert,
} from 'react-native';

import firebase from 'firebase';

import IdeaCard from '../../components/Card/IdeaCard';
import AppBar from '../../components/AppBar';
import BottomBar from '../../components/BottomBar';
import RankingButton from '../../components/RankingButton';
import BottomIcons from '../../components/BottomIcons';
import Loading from '../../components/Loading';
import HeaderRightButton from '../../components/HeaderRightButton';

export default function MyGoingScreen(props) {
  // eslint-disable-next-line no-unused-vars
  const { navigation } = props;
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const cleanupFuncs = {
      auth: () => {},
      ideas: () => {},
    };
    cleanupFuncs.auth = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const db = firebase.firestore();
        const ref = db.collection(`users/${user.uid}/ideas`).orderBy('updatedAt', 'desc');
        cleanupFuncs.ideas = ref.onSnapshot((snapshot) => {
          const userIdeas = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            userIdeas.push({
              id: doc.id,
              bodyText: data.bodyText,
              updatedAt: data.updatedAt.toDate(),
            });
          });
          setIdeas(userIdeas);
          setLoading(false);
        }, () => {
          setLoading(false);
        });
        // ユーザーが存在したら会員登録ボタンかログアウトボタンを表示
        // 会員登録ボタン：匿名ユーザー
        // ログアウトボタン：メアド登録済ユーザー
        navigation.setOptions({
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <HeaderRightButton currentUser={user} cleanupFuncs={cleanupFuncs} />
          ),
        });
      } else {
        // 匿名ログイン（firebaseの Authentication > Sign-in method から有効にする必要があります）
        firebase.auth().signInAnonymously()
          .catch(() => {
            Alert.alert('エラー', 'ログインして下さい');
          })
          .then(() => { setLoading(false); });
      }
    });
    return () => {
      cleanupFuncs.auth();
      cleanupFuncs.ideas();
    };
  }, []);

  if (ideas.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading} />
        {/* <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>最初のアイデアを登録しよう！</Text>
          <Button
            style={emptyStyles.button}
            label="登録する"
            onPress={() => { navigation.navigate('IdeaCreate'); }}
          />
        </View> */}
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <AppBar />
        <View style={styles.pageTop}>
          <Text style={styles.pageName}>GoingProject</Text>
        </View>
        <View style={styles.baseStyle}>
          <IdeaCard ideas={ideas} />
        </View>
        <RankingButton />
        <Text style={styles.pageTitle}>参加プロジェクト</Text>
      </View>
      <View style={styles.bottomIcons} />
      <BottomIcons />
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
  baseStyle: {
    backgroundColor: '#fcfcfc',
    top: 30,
    width: '94%',
    paddingTop: 70,
    left: '3%',
    right: '3%',
    height: 'auto',
    paddingBottom: 30,
    justifyContent: 'top',
    borderRadius: 8,
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
    top: 160,
    paddingHorizontal: '8%',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomIcons: {
    height: 120,
    backgroundColor: 'rgba(256,256,256,0.9)',
  },
});
const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
  },
  button: {
    alignSelf: 'center',
  },
});
