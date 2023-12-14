import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import WelcomeScreen from './screens/WelcomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'
import ColorThemesScreen from './screens/ColorThemesScreen';
import StartScreen from './screens/StartScreen'
import AddTaskScreen from './screens/AddTaskScreen';
import TaskListScreen from './screens/TaskListScreen';
import { TasksProvider } from './screens/TasksContext';
import ThemeProvider from './assets/ThemeProvider';


const Stack = createNativeStackNavigator();

export default function App() {
  return ( 
      <ThemeProvider>
        <NavigationContainer>
          <TasksProvider>
            <Stack.Navigator
              screenOptions={{
                headerShown: false
            }}>
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="Settings" component={SettingsScreen} />
              <Stack.Screen name="ColorThemes" component={ColorThemesScreen} />
              <Stack.Screen name="Start" component={StartScreen} />
              <Stack.Screen name="AddTask" component={AddTaskScreen} />
              <Stack.Screen name="TaskList" component={TaskListScreen} />
            </Stack.Navigator>
          </TasksProvider>
        </NavigationContainer>
      </ThemeProvider>
  );
};