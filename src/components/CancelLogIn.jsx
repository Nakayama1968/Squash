import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Icon from './Icon';
import { MatelialIcons } from '@expo/vector-icons';

export default function CancelLogIn() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => { navigation.reset({ index: 0, routes: [{ name: 'ideaList' }] }); }}
      style={styles.container}
    >
      <MatelialIcons name="delete" size={24} color="rgba(255,255,255,0.8)" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginRight: 8,
  },
});
