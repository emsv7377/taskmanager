import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'
import ColorThemesScreen from './screens/ColorThemesScreen';

import ThemeProvider from './assets/ThemeProvider';

import { DARK } from './assets/Theme';

const Stack = createNativeStackNavigator();

export default function App() {

  //const [theme, setTheme] = useState({ theme: DARK });

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
