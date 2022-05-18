// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  shape, string, instanceOf, arrayOf,
} from 'prop-types';

import { FontAwesome } from '@expo/vector-icons';
import { dateToString } from '../../utils';

export default function ContCard(props) {
  const { ideas } = props;
  const navigation = useNavigation();

  function renderItem({ item }) {
    return (
      <View>
        <TouchableOpacity
          style={styles.ContCardItem}
          onPress={() => { navigation.navigate('IdeaDetail', { id: item.id }); }}
        >
          <View style={styles.avater}>
            <FontAwesome name="image" size={40} color="gray" />
          </View>
          <View style={styles.profile}>
            <Text style={styles.memberName} numberOfLines={1}>{item.bodyText}</Text>
            <Text style={styles.memberDate}>{dateToString(item.updatedAt)}</Text>
            <Text style={styles.memberHash}>＃循環型 ＃水質 ＃森林</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={ideas}
        // eslint-disable-next-line react/jsx-no-bind
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

ContCard.propTypes = {
  ideas: arrayOf(shape({
    id: string,
    bodyText: string,
    updatedAt: instanceOf(Date),
  })).isRequired,
};

const styles = StyleSheet.create({
  ContCardItem: {
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
  avater: {
    width: '15%',
  },
  profile: {
    width: '52%',
  },
  badge: {
    width: '5%',
  },
  value: {
    width: '14%',
    lineHeight: 30,
  },

  memberName: {
    width: 300,
    fontSize: 14,
    paddingHorizontal: '5%',
    textAlign: 'left',
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
    color: 'deepskyblue',
  },
});
