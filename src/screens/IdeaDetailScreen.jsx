/* eslint-disable react/prop-types */
// import { number } from 'prop-types';
import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';

import CircleButton from '../components/CircleButton';

export default function IdeaDetailScreen(props) {
  const { navigation } = props;
  return (
    <View>
      <View style={styles.ideaHeader}>
        <Text>Pagename</Text>
      </View>
      <View>
        <Text style={styles.ideaTitle}>アイデアタイトル</Text>
      </View>
      <View>
        <Text style={styles.ideaDate}>2020年12月24日 11:00</Text>
      </View>
      <ScrollView style={styles.ideaBody}>
        <Text style={styles.ideaText}>
          ここにはそれぞれの人のアイデアが表示されていきます。
          長くなると自動にスクロールされます。
          ここにはそれぞれの人のアイデアが表示されていきます。
          長くなると自動にスクロールされます。
          ここにはそれぞれの人のアイデアが表示されていきます。
          長くなると自動にスクロールされます。
          ここにはそれぞれの人のアイデアが表示されていきます。
          長くなると自動にスクロールされます。
          ここにはそれぞれの人のアイデアが表示されていきます。
          長くなると自動にスクロールされます。
          ここにはそれぞれの人のアイデアが表示されていきます。
          長くなると自動にスクロールされます。
          ここにはそれぞれの人のアイデアが表示されていきます。
          長くなると自動にスクロールされます。
        </Text>
      </ScrollView>
      <CircleButton
        style={{ top: 600, bottom: 'auto' }}
        name="pencil"
        onPress={() => { navigation.navigate('IdeaEdit'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555555',
  },
  ideaHeader: {
    backgroundColor: '#ececec',
    borderBottomRightRadius: 50,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  ideaTitle: {
    color: '#333333',
    paddingHorizontal: 26,
    fontSize: 30,
    lineHeight: 50,
    fontWeight: 'bold',
  },
  ideaDate: {
    color: '#888888',
    paddingHorizontal: 28,
    fontSize: 12,
    lineHeight: 15,
  },
  ideaBody: {
    paddingVertical: 20,
    paddingHorizontal: 27,
  },
  ideaText: {
    fontSize: 16,
    lineHeight: 20,
  },
});
