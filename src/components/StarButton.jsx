/* eslint-disable react/no-unused-prop-types */
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function StarButton(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.StarButton, style]} onPress={onPress}>
      <MaterialCommunityIcons name={name} size={32} color="white" />
    </TouchableOpacity>
  );
}

StarButton.propTypes = {
  style: shape(),
  name: string.isRequired,
  // eslint-disable-next-line react/require-default-props
  onPress: func,
};

StarButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  StarButton: {
    backgroundColor: '#44b5fc',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 'auto',
    right: 210,
    bottom: 85,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
});
