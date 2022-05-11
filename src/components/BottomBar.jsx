import React from 'react';
import {
  StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { shape } from 'prop-types';
import { useNavigation } from '@react-navigation/native';

export default function BottomBar(props) {
  const { style } = props;
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.BottomBar}>
        <View style={styles.BottomBarInner}>
          <TouchableOpacity
            onPress={() => { navigation.navigate('IdeaSearch'); }}
          >
            <FontAwesome name="search" size={26} color="#eeeeee" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.bottomNaviButton2, style]}
            onPress={() => { navigation.navigate('MemberSearch'); }}
          >
            <FontAwesome5 name="user-alt" size={26} color="#eeeeee" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.bottomNaviButton3, style]}
            onPress={() => { navigation.navigate('Point'); }}
          >
            <MaterialIcons name="pie-chart" size={26} color="#eeeeee" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.bottomNaviButton4, style]}
            onPress={() => { navigation.navigate('MyProject'); }}
          >
            <FontAwesome5 name="list" size={26} color="#eeeeee" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.bottomNaviButton5, style]}
            onPress={() => { navigation.navigate('MyHome'); }}
          >
            <FontAwesome name="home" size={26} color="#eeeeee" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

BottomBar.propTypes = {
  style: shape(),
};

BottomBar.defaultProps = {
  style: null,
};

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
    color: 'red',
    paddingHorizontal: 20,
  },
  BottomBarRight: {
    position: 'absolute',
    right: 20,
    bottom: 15,
    color: 'blue',
  },
  BottomBarTitle: {
    position: 'absolute',
    left: 10,
    top: 13,
    fontSize: 40,
    lineHeight: 38,
    color: 'green',
  },
});
