// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import StarButton from './StarButton';
import HeartButton from './HeartButton';
import RacketButton from './RacketButton';
import HandsOnButton from './HandsOnButton';

export default function ProfileCard() {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <View>
          <TouchableOpacity
            style={styles.profileCardItem}
            onPress={() => { navigation.navigate('IdeaDetail'); }}
          >
            <FontAwesome name="user-circle" size={120} color="gray" />
            <Text style={{ top: 10, fontSize: 18 }}>Takayama Kouzan</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.starPoints}>
        <View>
          <StarButton name="star" style={{ left: 38 }} />
          <Text style={{
            top: 5, left: 40, fontSize: 20, color: 'deepskyblue',
          }}
          >
            360
          </Text>
        </View>

        <View>
          <HeartButton name="heart" style={{ left: 108 }} />
          <Text style={{
            top: 5, left: 110, fontSize: 20, color: 'violet',
          }}
          >
            230
          </Text>
        </View>

        <View>
          <RacketButton name="tennis" style={{ left: 178 }} />
          <Text style={{
            top: 5, left: 180, fontSize: 20, color: 'olivedrab',
          }}
          >
            150
          </Text>
        </View>

        <View>
          <HandsOnButton name="people" style={{ left: 248 }} />
          <Text style={{
            top: 5, left: 250, fontSize: 20, color: 'darkorange',
          }}
          >
            330
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  baseStyle: {
    backgroundColor: '#ffffff',
    width: '94%',
    paddingTop: 20,
    paddingHorizontal: '6%',
    left: '3%',
    right: '3%',
    height: 'auto',
    paddingBottom: 30,
    justifyContent: 'top',
    borderRadius: 8,

  },
  profileCardItem: {
    width: '90%',
    marginHorizontal: '5%',
    height: '76%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    top: 30,
    padding: 30,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0, 0.1)',
    borderWidth: 1,
    shadowColor: 'rgba(0,0,0, 0.4)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  starPoints: {
    alignItems: 'center',
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row',
    width: '14%',
    paddingTop: 5,
    left: 30,
    bottom: 330,
    lineHeight: 30,
  },
  profileHash: {
    top: 4,
    paddingHorizontal: 10,
    fontSize: 9,
    color: 'deepskyblue',
  },
});
