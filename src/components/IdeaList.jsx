// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function IdeaList() {
  return (
    <View>
      <View style={styles.ideaListItem}>
        <View>
          <Text style={styles.ideaTitle}>アイデアリスト</Text>
          <Text style={styles.ideaDate}>2022年3月6日 17:23</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View style={styles.ideaListItem}>
        <View>
          <Text style={styles.ideaTitle}>アイデアリスト</Text>
          <Text style={styles.ideaDate}>2022年5月6日 17:23</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View style={styles.ideaListItem}>
        <View>
          <Text style={styles.ideaTitle}>アイデアリスト</Text>
          <Text style={styles.ideaDate}>2022年4月6日 17:23</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>
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
});
