/* eslint-disable react/jsx-no-undef */
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StarButton from './StarButton';
import HeartButton from './HeartButton';
import RacketButton from './RacketButton';
import HandsOnButton from './HandsOnButton';

export default function StarCard() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.baseStyle}>
        <View style={styles.profileValue} />
        <StarButton
          style={{
            position: 'absolute',
            top: 'auto',
            left: '23%',
            bottom: 350,
          }}
          name="star"
          onPress={() => { navigation.navigate('StarList'); }}
        />
        <HeartButton
          style={{
            position: 'absolute',
            top: 'auto',
            left: '38%',
            bottom: 350,
          }}
          name="heart"
          onPress={() => { navigation.navigate('HeartList'); }}
        />
        <RacketButton
          style={{
            position: 'absolute',
            top: 'auto',
            left: '53%',
            bottom: 300,
          }}
          name="tennis"
          onPress={() => { navigation.navigate('ContriList'); }}
        />
        <HandsOnButton
          style={{
            position: 'absolute',
            top: 'auto',
            left: '68%',
            bottom: 300,
          }}
          name="people"
          onPress={() => { navigation.navigate('PracticeList'); }}
        />

        <Text style={{
          left: 10, bottom: 200, fontSize: 10, color: 'deepskyblue',
        }}
        >
          360
        </Text>

        <Text style={{
          left: 20, bottom: 200, fontSize: 10, color: 'violet',
        }}
        >
          230
        </Text>
        <Text style={{
          left: 30, bottom: 200, fontSize: 10, color: 'yellowgreen',
        }}
        >
          50
        </Text>
        <Text style={{
          left: 40, bottom: 200, fontSize: 10, color: 'orange',
        }}
        >
          30
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  baseStyle: {
    backgroundColor: '#ffffff',
    top: 30,
    width: '94%',
    paddingTop: 60,
    paddingHorizontal: '6%',
    left: '3%',
    right: '3%',
    height: 'auto',
    paddingBottom: 30,
    justifyContent: 'top',
    borderRadius: 8,

  },
  profileCardItem: {
    width: '100%',
    height: '75%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    padding: 40,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0, 0.1)',
    borderWidth: 1,
    shadowColor: 'rgba(0,0,0, 0.4)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  mainAvater: {
    width: 120,
  },
  profileValue: {
    alignItems: 'center',
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row',
    width: '14%',
    paddingHorizontal: 20,
  },
  profileHash: {
    top: 4,
    paddingHorizontal: 10,
    fontSize: 9,
    color: 'deepskyblue',
  },
});
