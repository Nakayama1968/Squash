import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>Squash</Text>
        <Text style={styles.appbarRight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 100,
    backgroundColor: '#5c4342',
    fontcolor: '#fffffff',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    backgroundColor: 'gray',
    height: 50,
  },
  appbarRight: {
    position: 'absolute',
    right: 20,
    bottom: 15,
    color: '#ffffff',
  },
  appbarTitle: {
    position: 'absolute',
    left: 10,
    top: 8,
    fontSize: 30,
    lineHeight: 36,
    color: '#ffffff',
  },
});
