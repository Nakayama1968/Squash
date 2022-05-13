// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Alert, Flatlist,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  shape, string, instanceOf, arrayOf,
} from 'prop-types';
import firebase from 'firebase';

import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { dateToString } from '../utils';

export default function IdeaCard(props) {
  const { ideas } = props;
  const navigation = useNavigation();

  function deleteIdea(id) {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/ideas`).doc(id);
      Alert.alert('メモを削除します', 'よろしいですか？', [
        {
          text: 'キャンセル',
          onPress: () => {},
        },
        {
          text: '削除する',
          style: 'destructive',
          onPress: () => {
            ref.delete().catch(() => {
              Alert.alert('削除に失敗しました');
            });
          },
        },
      ]);
    }
  }

  function renderItem({ item }) {
    return (
      <View style={styles.baseStyle}>
        <TouchableOpacity
          style={styles.IdeaCardItem}
          onPress={() => { navigation.navigate('IdeaDetail'); }}
        >
          <View>
            <FontAwesome name="user-circle-o" size={40} color="gray" />
          </View>
          <View>
            <Text style={styles.ideaTitle} numberOfLines={1}>{item.bodeText}</Text>
            <Text style={styles.ideaDate}>{String(item.updateAt)}</Text>
            <Text style={styles.ideaHash}>＃循環型 ＃水質 ＃森林</Text>
          </View>
          <TouchableOpacity
            style={styles.ideaDelete}
            onPress={() => { deleteIdea(item.id); }}
          >
            <Ionicons name="arrow-forward" size={16} color="#b0b0b0" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Flatlist
        data={ideas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
IdeaCard.propTypes = {
  ideas: arrayOf(shape({
    id: string,
    bodyText: string,
    updatedAt: instanceOf(Date),
  })).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    textAlign: 'left',
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
    color: 'deepskyblue',
  },
  ideaDelete: {
    textAlign: 'right',
    padding: 8,
  },
});
