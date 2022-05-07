/* eslint-disable no-undef */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { string, shape } from 'prop-types';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function Icons() {
  return (
    <View>
      <View style={[styles.iconButton, styles]}>
        <MaterialIcons name="star" size={24} color="skyblue" />
        <Ionicons name="heart" size={24} color="black" />
        <MaterialIcons name="sports-tennis" size={24} color="black" />
        <MaterialIcons name="forum" size={24} color="black" />
      </View>
    </View>
  );
}

// eslint-disable-next-line no-undef
iconButton.propTypes = {
  style: shape(),
  name: string.isRequired,
};

iconButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 550,
    right: 30,
    bottom: 30,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
});
