import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';   // used to identify theme of device, i.e. dark/light

import WelcomeScreen from './screens/WelcomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'
import ColorThemesScreen from './screens/ColorThemesScreen';

import ThemeContext from './assets/ThemeContext';

import { DARK } from './assets/Theme';
const Stack = createNativeStackNavigator();

export default function App() {
  const [theme, setTheme] = useState({ theme: DARK});    // default set to dark theme

  return (
    <ThemeContext.Provider value={theme.theme}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen}
            />
            <Stack.Screen 
            name="Settings" 
            component={SettingsScreen}
            />
            <Stack.Screen 
            name="ColorThemes" 
            component={ColorThemesScreen}
            />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeContext.Provider>
  );
}
