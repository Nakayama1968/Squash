import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { back } from "react-native/Libraries/Animated/Easing";
import { string,bool } from 'prop-types';
import { shape } from "prop-types";

function Hello(props) {
  const { children, bang, style } = props;

  return (
    <View>
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}

Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },

});

export default Hello;
