import React from 'react';
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native';

import AppBar from '../components/Appbar';
import Button from '../components/Button';

export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Password" />
        <Button label="submit" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Text style={styles.footerLink}>Sign up here!</Text>
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
    backgroundColor: '#467FD3',
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
    color: 'white',
  },
  footerText: {
    fontsize: 14,
    lineHeight: 24,
    marginRight: 12,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
  footer: {
    flexDirection: 'row',
  },
});
