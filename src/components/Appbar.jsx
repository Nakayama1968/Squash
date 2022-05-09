import React from 'react';
import {
  StatusBar, Platform, StyleSheet, Text, View,
} from 'react-native';
import TopNaviButton from './TopNaviButton';

export default function AppBar() {
  return (
    <View>
      <View style={styles.AppBar}>
        <StatusBar barStyle={Platform.OS === 'android' ? 'default' : 'light-content'} />
        <Text style={styles.AppBarTitle}>Squash</Text>
      </View>
      <TopNaviButton />
    </View>
  );
}

const styles = StyleSheet.create({
  AppBar: {
    width: '100%',
    height: 60,
    backgroundColor: '#5c4342',
    fontcolor: '#ffffff',
    justifyContent: 'flex-end',
  },
  AppBarPage: {
    fontSize: 24,
    position: 'absolute',
    left: 30,
    top: 10,
    color: '#333333',
  },
  AppBarTitle: {
    position: 'absolute',
    left: 20,
    top: 13,
    fontSize: 40,
    lineHeight: 38,
    color: '#ffffff',
  },
});
