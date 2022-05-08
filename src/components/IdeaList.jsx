// import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function IdeaList() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.ideaListItem}
        onPress={() => { navigation.navigate('IdeaDetail'); }}
      >
        <View>
          <Text style={styles.ideaTitle}>アイデアリスト</Text>
          <Text style={styles.ideaDate}>2022年3月6日 17:23</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.ideaDelete}
            onPress={() => { Alert.alert('Are you sure?'); }}
          >
            <Feather name="x" size={16} color="#b0b0b0" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ideaListItem}
        onPress={() => { navigation.navigate('IdeaDetail'); }}
      >
        <View>
          <Text style={styles.ideaTitle}>アイデアリスト</Text>
          <Text style={styles.ideaDate}>2022年3月6日 17:23</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.ideaDelete}
            onPress={() => { Alert.alert('Are you sure?'); }}
          >
            <Feather name="x" size={16} color="#b0b0b0" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ideaListItem}
        onPress={() => { navigation.navigate('IdeaDetail'); }}
      >
        <View>
          <Text style={styles.ideaTitle}>アイデアリスト</Text>
          <Text style={styles.ideaDate}>2022年3月6日 17:23</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.ideaDelete}
            onPress={() => { Alert.alert('Are you sure?'); }}
          >
            <Feather name="x" size={16} color="#b0b0b0" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ideaListItem: {
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderColor: 'rgba(0,0,0, 0.15)',
    borderBottomWidth: 1,
  },
  ideaTitle: {
    fontSize: 17,
    color: 'black',
  },
  ideaDate: {
    top: 2,
    fontSize: 10,
    color: '#777777',
  },
  ideaDelete: {
    padding: 8,
  },
});
