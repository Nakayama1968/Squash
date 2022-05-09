/* eslint-disable react/no-unused-prop-types */
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

export default function StarRkButton(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.StarRkButton, style]} onPress={onPress}>
      <Ionicons name={name} size={26} color="#44b5fc" />
    </TouchableOpacity>
  );
}

StarRkButton.propTypes = {
  style: shape(),
  name: string.isRequired,
  // eslint-disable-next-line react/require-default-props
  onPress: func,
};

StarRkButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  StarRkButton: {
    backgroundColor: '#58b2dc',
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
