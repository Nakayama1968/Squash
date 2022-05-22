import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StarButton from './StarButton';
import HeartButton from './HeartButton';
import RacketButton from './RacketButton';
import HandsOnButton from './HandsOnButton';

export default function BottomIcons() {
  const navigation = useNavigation();
  return (
    <View style={styles.buttons}>
      <StarButton
        name="star"
        onPress={() => { navigation.navigate('IdeaCreate'); }}
      />
      <HeartButton
        name="heart"
        onPress={() => { navigation.navigate('HeartProject'); }}
      />
      <RacketButton
        name="tennis"
        onPress={() => { navigation.navigate('ContriCreate'); }}
      />
      <HandsOnButton
        name="people"
        onPress={() => { navigation.navigate('PractCreate'); }}
      />
    </View>
  );
}

BottomIcons.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    display: 'flex',
    bottom: 130,
  },
});
