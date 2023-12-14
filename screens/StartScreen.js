import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import ThemeContext from '../assets/ThemeContext';
import Styles from '../assets/Styles';

const StartScreen = ({navigation}) => {
  const { theme } = useContext(ThemeContext);
  const { colors: themeColors } = theme;

  const styles = Styles({themeColors});

    const handleTodayPress = () => {
        // Navigate to 'Today' screen or perform related action
        navigation.navigate('TaskList');
      };
    
      const handleScheduledPress = () => {
        // Navigate to 'Scheduled' screen or perform related action
        // Example: navigation.navigate('ScheduledScreen');
      };
    
      const handleCompletePress = () => {
        // Navigate to 'Complete' screen or perform related action
        // Example: navigation.navigate('CompleteScreen');
      };
    
      const handleAddNewPress = () => {
        // Navigate to 'Add New' screen or perform related action
        navigation.navigate('AddTask');
      };
    
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.row}>
            <TouchableOpacity onPress={handleTodayPress} style={styles.box}>
              <Text style={styles.boxText}>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleScheduledPress} style={styles.box}>
              <Text style={styles.boxText}>Scheduled</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={handleCompletePress} style={styles.box}>
              <Text style={styles.boxText}>Complete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAddNewPress} style={styles.box}>
              <Text style={styles.boxText}>Add New</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.goBack()} >
                <Text style={styles.buttonText}> Back </Text>
            </TouchableOpacity>  
        </SafeAreaView>
      );
    };
    
    
  
export default StartScreen;