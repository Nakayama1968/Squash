// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function CircleButton() {
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>＋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: 'green',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
    bottom: 30,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
  },
});
