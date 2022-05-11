/* eslint-disable react/prop-types */
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppBar from '../../components/AppBar';
import BottomBar from '../../components/BottomBar';
import ProfileCard from '../../components/ProfileCard';

export default function MyHomeScreen(props) {
  // eslint-disable-next-line no-unused-vars
  const { navigation } = props;

  return (
    <>
      <View style={styles.container}>
        <AppBar />
        <View style={styles.pageTop}>
          <Text style={styles.pageName}>MyHome</Text>
        </View>
        <ProfileCard />
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
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'normal',
  },
});
