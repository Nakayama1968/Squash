// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { shape } from 'prop-types';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function TopNaviButton(props) {
  const { style } = props;
  const navigation = useNavigation();
  return (
    <View style={styles.topNaviButton}>
      <TouchableOpacity
        style={[styles.topNaviButton1, style]}
        onPress={() => { navigation.navigate('Message'); }}
      >
        <MaterialIcons name="messenger-outline" size={31} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.topNaviButton2, style]}
        onPress={() => { navigation.navigate('HeartList'); }}
      >
        <FontAwesome name="heart-o" size={30} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.topNaviButton3, style]}
        onPress={() => { navigation.navigate('IdeaCreate'); }}
      >
        <FontAwesome name="plus-square-o" size={32} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
}

TopNaviButton.propTypes = {
  style: shape(),
};

TopNaviButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  topNaviButton: {
    width: '10%',
    height: 40,
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 20,
    bottom: 'auto',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  topNaviButton1: {
    right: 75,
  },
  topNaviButton2: {
    right: 45,
  },
  topNaviButton3: {
    right: 15,
  },
});
