/* eslint-disable react/prop-types */
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import IdeaList from '../components/IdeaList';
import CircleButton from '../components/CircleButton';

export default function IdeaListScreen(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <IdeaList />
      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('IdeaCreate'); }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
