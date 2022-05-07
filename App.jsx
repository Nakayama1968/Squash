import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>Squash</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>

      <View style={styles.ideaListItem}>
        <View>
          <Text style={styles.ideaTitle}>買い物リスト</Text>
          <Text style={styles.ideaDate}>2022年5月6日 10:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View style={styles.ideaListItem}>
        <View>
          <Text style={styles.ideaTitle}>アイデアリスト</Text>
          <Text style={styles.ideaDate}>2022年5月6日 10:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View style={styles.ideaListItem}>
        <View>
          <Text style={styles.ideaTitle}>買い物リスト</Text>
          <Text style={styles.ideaDate}>2022年5月6日 10:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>＋</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  appbar: {
    width: '100%',
    height: 100,
    backgroundColor: '#5c4342',
    fontcolor: '#fffffff',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    backgroundColor: 'gray',
    height: 50,
  },
  appbarRight: {
    position: 'absolute',
    right: 20,
    bottom: 15,
    color: '#ffffff',
  },
  appbarTitle: {
    position: 'absolute',
    left: 10,
    top: 8,
    fontSize: 30,
    lineHeight: 36,
    color: '#ffffff',
  },

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
  circleButton: {
    backgroundColor: 'green',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
    bottom: 30,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
  },

});
