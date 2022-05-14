/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
// import { Alert } from 'react-native-web';
import firebase from 'firebase';

import Button from '../components/Button';
import Loading from '../components/Loading';
import { translateErrors } from '../utils';
import CancelLogIn from '../components/CancelLogIn';

export default function LogInScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => <CancelLogIn />,
    });
  }, []);

  function handlePress() {
    setLoading(true);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'IdeaList' }],
        });
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      })
      .then(() => {
        setLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading} />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <Button
          label="submit"
          // eslint-disable-next-line react/jsx-no-bind
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'SignUp' }],
              });
            }}
          >
            <Text style={styles.footerLink}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  inner: {
    paddingHorizontal: 30,
    paddingVertical: 30,

  },
  title: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#dddddd',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  buttonContainer: {
    backgroundColor: 'deepskyblue',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 8,
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingHorizontal: 32,
    paddingVertical: 8,
    color: '#ffffff',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 12,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: 'deepskyblue',
  },
  footer: {
    flexDirection: 'row',
  },
});
