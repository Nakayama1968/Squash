import 'react-native-gesture-handler';
// import { StatusBar, Platform } from 'react-native';
import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import firebase from 'firebase';

import IdeaListScreen from './src/screens/RankList/IdeaListScreen';
import IdeaDetailScreen from './src/screens/IdeaDetailScreen';
import IdeaEditScreen from './src/screens/IdeaEditScreen';
import IdeaCreateScreen from './src/screens/Top/IdeaCreateScreen';
import LogInScreen from './src/screens/LogInScreen ';
import SignUpScreen from './src/screens/SignUpScreen';

import HeartListScreen from './src/screens/RankList/HeartListScreen';
import ContriListScreen from './src/screens/RankList/ContriListScreen';
import PracticeListScreen from './src/screens/RankList/PracticeListScreen';
import StarListScreen from './src/screens/RankList/StarListScreen';
import IdeaContriScreen from './src/screens/IdeaContriScreen';
import IdeaHandsScreen from './src/screens/IdeaHandsScreen';
import IdeaSearchScreen from './src/screens/Tab/IdeaSearchScreen';
import MemberSearchScreen from './src/screens/Tab/MemberSearchScreen';
import MessageScreen from './src/screens/Top/MessageScreen';
import MessageEditScreen from './src/screens/Top/MessageEditScreen';
import PointScreen from './src/screens/Tab/PointScreen';
import MyGoingScreen from './src/screens/Tab/MyGoingScreen';
import MyHomeScreen from './src/screens/Tab/MyHomeScreen';
import IdeaPracticeScreen from './src/screens/IdeaPracticeScreen';
import MyProjectScreen from './src/screens/MyList/MyProjectScreen';
import HeartProjectScreen from './src/screens/MyList/HeartProjectScreen';
import ContriProjectScreen from './src/screens/MyList/ContriProjectScreen';
import PracticeProjectScreen from './src/screens/MyList/PracticeProjectScreen';
import ContriCreateScreen from './src/screens/Top/ContriCreateScreen';
import PractCreateScreen from './src/screens/Top/PractCreateScreen';

import { firebaseConfig } from './env';

require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();
LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // ??????????????????????????????????????????
        initialRouteName="LogIn"
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
        <Stack.Screen name="IdeaSearch" component={IdeaSearchScreen} />
        <Stack.Screen name="MemberSearch" component={MemberSearchScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="MessageEdit" component={MessageEditScreen} />
        <Stack.Screen name="Point" component={PointScreen} />
        <Stack.Screen name="MyGoing" component={MyGoingScreen} />
        <Stack.Screen name="MyHome" component={MyHomeScreen} />
        <Stack.Screen name="IdeaPractice" component={IdeaPracticeScreen} />
        <Stack.Screen name="MyProject" component={MyProjectScreen} />
        <Stack.Screen name="HeartProject" component={HeartProjectScreen} />
        <Stack.Screen name="ContriProject" component={ContriProjectScreen} />
        <Stack.Screen name="PracticeProject" component={PracticeProjectScreen} />
        <Stack.Screen name="ContriCreate" component={ContriCreateScreen} />
        <Stack.Screen name="PractCreate" component={PractCreateScreen} />

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
