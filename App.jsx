import 'react-native-gesture-handler';
import { StatusBar, Platform } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import firebase from 'firebase';

import IdeaListScreen from './src/screens/IdeaListScreen';
import IdeaDetailScreen from './src/screens/IdeaDetailScreen';
import IdeaEditScreen from './src/screens/IdeaEditScreen';
import IdeaCreateScreen from './src/screens/IdeaCreateScreen';
import LogInScreen from './src/screens/LogInScreen ';
import SignUpScreen from './src/screens/SignUpScreen';
import HeartListScreen from './src/screens/HeartListScreen';
import ContriListScreen from './src/screens/ContriListScreen';
import PracticeListScreen from './src/screens/PracticeListScreen';
import StarListScreen from './src/screens/StarListScreen';
import IdeaContriScreen from './src/screens/IdeaContriScreen';
import IdeaHandsScreen from './src/screens/IdeaHandsScreen';

import { firebaseConfig } from './env';

const Stack = createStackNavigator();

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="IdeaList"
        screenOptions={{
          headerStyle: { backgroundColor: '#111111' },
          headerTitleStyle: { color: '#ffffff', fontSize: 24 },
          headerTitle: '',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          UIStatusBarStyle: 'lightContent',
        }}
      >
        <Stack.Screen name="IdeaList" component={IdeaListScreen} />
        <Stack.Screen name="IdeaDetail" component={IdeaDetailScreen} />
        <Stack.Screen name="IdeaEdit" component={IdeaEditScreen} />
        <Stack.Screen name="IdeaCreate" component={IdeaCreateScreen} />
        <Stack.Screen name="HeartList" component={HeartListScreen} />
        <Stack.Screen name="ContriList" component={ContriListScreen} />
        <Stack.Screen name="PracticeList" component={PracticeListScreen} />
        <Stack.Screen name="StarList" component={StarListScreen} />
        <Stack.Screen name="IdeaContri" component={IdeaContriScreen} />
        <Stack.Screen name="IdeaHands" component={IdeaHandsScreen} />


        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
