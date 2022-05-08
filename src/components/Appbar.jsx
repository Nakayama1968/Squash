import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.AppBar}>
      <View style={styles.AppBarInner}>
        <Text style={styles.AppBarTitle}>Squash</Text>
        <Text style={styles.AppBarRight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AppBar: {
    width: '100%',
    height: 100,
    backgroundColor: '#5c4342',
    fontcolor: '#fffffff',
    justifyContent: 'flex-end',
  },
  AppBarInner: {
    backgroundColor: 'gray',
    height: 50,
  },
  AppBarRight: {
    position: 'absolute',
    right: 20,
    bottom: 15,
    color: '#ffffff',
  },
  AppBarTitle: {
    position: 'absolute',
    left: 10,
    top: 8,
    fontSize: 30,
    lineHeight: 36,
    color: '#ffffff',
  },
});
