import React from 'react';
import {
  View, TextInput, StyleSheet,
} from 'react-native';

import AppBar from '../components/Appbar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function IdeaEditScreen() {
  return (
    <KeyboardSafeView style={styles.container}>
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="アイデアリスト" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});