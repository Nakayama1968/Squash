/* eslint-disable react/prop-types */
// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Text, Alert,
} from 'react-native';

import firebase from 'firebase';

import { TextInput } from 'react-native-gesture-handler';
import IdeaCard from '../../components/Card/IdeaCard';
import AppBar from '../../components/AppBar';
import BottomBar from '../../components/BottomBar';
import HeaderRightButton from '../../components/HeaderRightButton';

export default function HeartProjectScreen(props) {
  // eslint-disable-next-line no-unused-vars
  const { navigation } = props;
  const [search, setSearch] = useState('');
  const [ideas, setIdeas] = useState([]);
  const [
    // eslint-disable-next-line no-unused-vars
    isLoading,
    setLoading] = useState(false);

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
        {/* <Loading isLoading={isLoading} />
        <View style={emptyStyles.inner}>
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
          <Text style={styles.pageName}>MyFavorite</Text>
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
    borderTopColor: 'violet',
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
