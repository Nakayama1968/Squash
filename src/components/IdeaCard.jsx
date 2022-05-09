// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function IdeaCard() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.baseStyle}>
        <TouchableOpacity
          style={styles.IdeaCardItem}
          onPress={() => { navigation.navigate('IdeaDetail'); }}
        >
          <View>
            <FontAwesome name="user-circle-o" size={40} color="gray" />
          </View>
          <View>
            <Text style={styles.ideaTitle}>森を綺麗に海を守ろう</Text>
            <Text style={styles.ideaDate}>2022年3月6日 17:23</Text>
            <Text style={styles.ideaHash}>＃循環型 ＃水質 ＃森林</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.ideaNext}
              onPress={() => { Alert.alert('Are you sure?'); }}
            >
              <Ionicons name="arrow-forward" size={16} color="#b0b0b0" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.IdeaCardItem}
          onPress={() => { navigation.navigate('IdeaDetail'); }}
        >
          <View>
            <FontAwesome name="user-circle-o" size={40} color="gray" />
          </View>
          <View>
            <Text style={styles.ideaTitle}>森を綺麗に海を守ろう</Text>
            <Text style={styles.ideaDate}>2022年3月6日 17:23</Text>
            <Text style={styles.ideaHash}>＃循環型 ＃水質 ＃森林</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.ideaNext}
              onPress={() => { Alert.alert('Are you sure?'); }}
            >
              <Ionicons name="arrow-forward" size={16} color="#b0b0b0" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.IdeaCardItem}
          onPress={() => { navigation.navigate('IdeaDetail'); }}
        >
          <View>
            <FontAwesome name="user-circle-o" size={40} color="gray" />
          </View>
          <View>
            <Text style={styles.ideaTitle}>オフグリッドの実証実験を行います。</Text>
            <Text style={styles.ideaDate}>2022年3月6日 17:23</Text>
            <Text style={styles.ideaHash}>＃蓄電池 ＃直流送電 ＃再エネ</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.ideaNext}
              onPress={() => { Alert.alert('Are you sure?'); }}
            >
              <Ionicons name="arrow-forward" size={16} color="#b0b0b0" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.IdeaCardItem}
          onPress={() => { navigation.navigate('IdeaDetail'); }}
        >
          <View>
            <FontAwesome name="user-circle-o" size={40} color="gray" />
          </View>
          <View>
            <Text style={styles.ideaTitle}>電動バイクでレースをします。</Text>
            <Text style={styles.ideaDate}>2022年3月6日 17:23</Text>
            <Text style={styles.ideaHash}>＃デザイン ＃モビリティ ＃再エネ</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.ideaNext}
              onPress={() => { Alert.alert('Are you sure?'); }}
            >
              <Ionicons name="arrow-forward" size={16} color="#b0b0b0" />
            </TouchableOpacity>
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
  IdeaCardItem: {
    width: '90%',
    height: 80,
    margin: 3,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
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

  ideaTitle: {
    width: 300,
    fontSize: 14,
    paddingHorizontal: '3%',
    align: 'left',
    color: 'black',
  },
  ideaDate: {
    top: 2,
    paddingHorizontal: 10,
    fontSize: 8,
    color: '#777777',
  },
  ideaHash: {
    top: 4,
    paddingHorizontal: 10,
    fontSize: 9,
    color: '#44B5fc',
  },
  ideaNext: {
    align: 'right',
    padding: 8,
  },
});
