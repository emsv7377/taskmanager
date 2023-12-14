import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import ThemeContext from '../assets/ThemeContext';


const StartScreen = ({navigation}) => {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;

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
      
      /* Allows dynamic colors */
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
          backgroundColor: colors ? colors.background : '#fff',
        },
        row: {
          flexDirection: 'row',
          marginBottom: 20,
        },
        box: {
          flex: 1,
          aspectRatio: 1, // Keeps the boxes square
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors ? colors.box : '#3498db',
          margin: 5,
          borderRadius: 10,
          borderWidth: 1,
          borderColor:'black',
        },
        boxText: {
          color: colors ? colors.boxText : '#fff',
          fontSize: 18,
          fontWeight: 'bold',
        },
        button:{
          alignItems: 'center',
          backgroundColor: colors ? colors.backButton : 'green',
          fontSize: 24,
          padding: 15,
          margin: 4,
          width:'80%',
          borderRadius: 20,
          marginTop:60,
        },
      buttonText:{
          color: colors ? colors.buttonText : 'red',
          fontSize: 20,
      },
      });

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