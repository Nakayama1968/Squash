// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppBar from '../components/Appbar';
import IdeaList from '../components/IdeaList';
import CircleButton from '../components/CircleButton';

export default function IdeaListScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <IdeaList />
      <CircleButton>＋</CircleButton>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
