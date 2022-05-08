import 'react-native-gesture-handler';
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

import { firebaseConfig } from './env';

const Stack = createStackNavigator();

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SingUp"
        screenOptions={{
          headerStyle: { backgroundColor: '#5c4343' },
          headerTitleStyle: { color: '#ffffff', fontSize: 24 },
          headerTitle: 'Squash',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="IdeaList" component={IdeaListScreen} />
        <Stack.Screen name="IdeaDetail" component={IdeaDetailScreen} />
        <Stack.Screen name="IdeaEdit" component={IdeaEditScreen} />
        <Stack.Screen name="IdeaCreate" component={IdeaCreateScreen} />
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
