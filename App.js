import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useColorScheme } from 'react-native';   // used to identify theme of device, i.e. dark/light

import WelcomeScreen from './screens/WelcomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Welcome'}}
          />
          <Stack.Screen 
            name ="Profile" 
            component={ProfileScreen}
            />
            <Stack.Screen 
            name ="Settings" 
            component={SettingsScreen}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
