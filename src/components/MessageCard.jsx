// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function MessageCard() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.baseStyle}>
        <TouchableOpacity
          style={styles.MessageCardItem}
          onPress={() => { navigation.navigate('MessageEdit'); }}
        >
          <View style={styles.avater}>
            <FontAwesome name="user-circle" size={40} color="green" />
          </View>
          <View style={styles.profile}>
            <Text style={styles.memberName}>Yosida Kenkou</Text>
            <Text style={styles.memberDate}>2022年3月6日 17:23</Text>
            <Text style={styles.memberHash}>＃循環型 ＃水質 ＃森林</Text>
          </View>
          <View style={styles.badge}>
            <MaterialCommunityIcons name="message-outline" size={24} color="gray" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.MessageCardItem}
          onPress={() => { navigation.navigate('MessageEdit'); }}
        >
          <View style={styles.avater}>
            <FontAwesome name="user-circle" size={40} color="deepskyblue" />
          </View>
          <View style={styles.profile}>
            <Text style={styles.memberName}>kawabata Yasunari</Text>
            <Text style={styles.memberDate}>2022年3月6日 17:23</Text>
            <Text style={styles.memberHash}>＃循環型 ＃水質 ＃森林</Text>
          </View>
          <View style={styles.badge}>
            <MaterialCommunityIcons name="message-outline" size={24} color="gray" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.MessageCardItem}
          onPress={() => { navigation.navigate('MessageEdit'); }}
        >
          <View style={styles.avater}>
            <FontAwesome name="user-circle" size={40} color="hotpink" />
          </View>
          <View style={styles.profile}>
            <Text style={styles.memberName}>Minamoto Yoritomo</Text>
            <Text style={styles.memberDate}>2022年3月6日 17:23</Text>
            <Text style={styles.memberHash}>＃蓄電池 ＃直流送電 ＃再エネ</Text>
          </View>
          <View style={styles.badge}>
            <MaterialCommunityIcons name="message-outline" size={24} color="gray" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.MessageCardItem}
          onPress={() => { navigation.navigate('MessageEdit'); }}
        >
          <View style={styles.avater}>
            <FontAwesome name="user-circle" size={40} color="orange" />
          </View>
          <View style={styles.profile}>
            <Text style={styles.memberName}>Fukuzawa Yukichi</Text>
            <Text style={styles.memberDate}>2022年3月6日 17:23</Text>
            <Text style={styles.memberHash}>＃デザイン ＃モビリティ ＃再エネ</Text>
          </View>
          <View style={styles.badge}>
            <MaterialCommunityIcons name="message-outline" size={24} color="gray" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  baseStyle: {
    backgroundColor: '#ffffff',
    top: 30,
    width: '94%',
    paddingTop: 70,
    left: '3%',
    right: '3%',
    height: 'auto',
    paddingBottom: 30,
    justifyContent: 'top',
    borderRadius: 8,

  },
  MessageCardItem: {
    width: '90%',
    height: 80,
    margin: 3,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'flex-Messaget',
    paddingVertical: 16,
    marginHorizontal: '5%',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 6,
    borderColor: 'rgba(0,0,0, 0.2)',
    borderWidth: 1,
    shadowColor: 'rgba(0,0,0, 0.4)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  avater: {
    width: '15%',
  },
  profile: {
    width: '75%',
  },
  badge: {
    width: '15%',
  },

  memberName: {
    width: 300,
    fontSize: 14,
    paddingHorizontal: '3%',
    align: 'left',
    color: 'black',
  },
  memberDate: {
    top: 2,
    paddingHorizontal: 10,
    fontSize: 8,
    color: '#777777',
  },
  memberHash: {
    top: 4,
    paddingHorizontal: 10,
    fontSize: 9,
    color: '#44B5fc',
  },
});
