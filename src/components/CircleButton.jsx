/* eslint-disable react/no-unused-prop-types */
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CircleButton(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <MaterialCommunityIcons name={name} size={32} color="#ffffff" />
    </TouchableOpacity>
  );
}

CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
  // eslint-disable-next-line react/require-default-props
  onPress: func,
};

CircleButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: 'green',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
});
