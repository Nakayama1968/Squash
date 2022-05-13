/* eslint-disable react/prop-types */
// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Text, Alert,
} from 'react-native';
import firebase from 'firebase';

import IdeaCard from '../../components/IdeaCard';
import HeartButton from '../../components/HeartButton';
import StarButton from '../../components/StarButton';
import RacketButton from '../../components/RacketButton';
import HandsOnButton from '../../components/HandsOnButton';
import AppBar from '../../components/AppBar';
import BottomBar from '../../components/BottomBar';
import RankingButton from '../../components/RankingButton';
import LogOutButton from '../../components/LogOutButton';
import Loading from '../../components/Loading';

export default function IdeaListScreen(props) {
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
          headerRight: () => (
            <HeaderRightButton currentUser={user} cleanupFuncs={cleanupFuncs} />
          ),
        });
      } else {
        // 匿名ログイン（firebaseの Authentication > Sign-in method から有効にする必要があります）
        firebase.auth().signInAnonymously()
          .catch(() => {
            Alert.alert('エラー', 'アプリを再起動してください');
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
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>最初のメモを作成しよう！</Text>
          <Button
            style={emptyStyles.button}
            label="作成する"
            onPress={() => { navigation.navigate('ideaCreate'); }}
          />
        </View>
      </View>
    );
  }


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
