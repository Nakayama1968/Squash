import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function BottomBar() {
  return (
    <View>
      <View style={styles.BottomBar}>
        <View style={styles.BottomBarInner}>
          <FontAwesome name="search" size={26} color="#eeeeee" />
          <FontAwesome5 name="user-alt" size={25} color="#eeeeee" />
          <MaterialIcons name="pie-chart" size={26} color="#eeeeee" />
          <FontAwesome5 name="list" size={26} color="#eeeeee" />
          <FontAwesome name="home" size={26} color="#eeeeee" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BottomBar: {
    width: '100%',
    position: 'absolute',
    top: 'auto',
    bottom: 0,
    height: 70,
    backgroundColor: '#5c4342',
  },
  BottomBarInner: {
    width: '100%',
    top: 15,
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#ffffff',
    paddingHorizontal: 20,
  },
  BottomBarRight: {
    position: 'absolute',
    right: 20,
    bottom: 15,
    color: '#999999',
  },
  BottomBarTitle: {
    position: 'absolute',
    left: 10,
    top: 13,
    fontSize: 40,
    lineHeight: 38,
    color: '#ffffff',
  },
});
