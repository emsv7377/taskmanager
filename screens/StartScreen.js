import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity} from 'react-native';

const StartScreen = ({navigation}) => {
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
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
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
        backgroundColor: '#3498db',
        margin: 5,
        borderRadius: 10,
      },
      boxText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
    });
  
export default StartScreen;