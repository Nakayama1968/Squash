import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { shape } from 'prop-types';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function RankingButton(prop) {
  const { style } = prop;
  const navigation = useNavigation();
  return (
    <View style={styles.rankingButton}>

      <TouchableOpacity
        style={[styles.RankingButton1, style]}
        onPress={() => { navigation.navigate('StarList'); }}
      >
        <Ionicons name="star" size={26} color="deepskyblue" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.RankingButton2, style]}
        onPress={() => { navigation.navigate('HeartList'); }}
      >
        <Ionicons name="heart" size={26} color="#f17ff1" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.RankingButton3, style]}
        onPress={() => { navigation.navigate('ContriList'); }}
      >
        <MaterialCommunityIcons name="tennis" size={28} color="#93AA16" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.RankingButton4, style]}
        onPress={() => { navigation.navigate('PracticeList'); }}
      >
        <Ionicons name="people" size={26} color="#EB8E26" />
      </TouchableOpacity>
    </View>
  );
}

RankingButton.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  style: shape(),
};

RankingButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  rankingButton: {
    width: '10%',
    height: 40,
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 150,
    right: 28,
    bottom: 'auto',
    // shadowColor: '#000000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.15,
    // shadowRadius: 2,

  },
  RankingButton1: {
    right: 95,
  },
  RankingButton2: {
    right: 70,
  },
  RankingButton3: {
    right: 45,
  },
  RankingButton4: {
    right: 20,
  },
});
