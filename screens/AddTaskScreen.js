import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import { TasksContext } from './TasksContext';
import ThemeContext from '../assets/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import ColorPicker from '../assets/ColorPicker';

const AddTaskScreen = ({ navigation }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  //const [color, setColor] = useState('#3498db'); // Default color
  const [time, setTime] = useState('');
  const { addTask } = useContext(TasksContext);
  const [tag, setTag] = useState(''); // State för att hålla taggen
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const { theme } = useContext(ThemeContext);   // Fetch current theme
  const { colors } = theme;                     // Fetch colors for components current theme 
  
  const [pickedColor, setPickedColor] = useState(colors ? colors.button : '#575A5E');  // TODO: change default value 
  const [showColorPicker, setShowColorPicker] = useState(false);
  
  const handleColorSelect = (selectedColor) => {
    setPickedColor(selectedColor);
    setShowColorPicker(false);
  };

  const handleAddTask = () => {
    // Code to add task to Today's list
    const newTask = {
      name: taskName,
      description: description,
      color: pickedColor,
      time: time,
      completed: false,
      tag: tag,
    };

    addTask(newTask);
    navigation.navigate('TaskList');

  };

  /* allows dynamic colors */
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      //color: colors ? colors.background : 'white',
      backgroundColor : colors ? colors.background : 'white',
    },
    title:{
      fontSize: 24,
      color: colors ? colors.title : 'red',
      fontWeight: 'bold',
  },
  titleContainer:{
      margin:'10%',
      height:'10%',
      alignItems:'center',
    },
    label: {
      fontSize: 18,
      marginBottom: 5,
      color: colors ? colors.labelText : 'black',
    },
    input: {
      height: 40,
      borderColor: colors ? colors.inputContainer : 'gray',
      backgroundColor: colors ? colors.inputContainer : 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
      borderRadius:15, 
    },
    addButton: {
      backgroundColor: colors ? colors.button : '#3498db',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: colors ? colors.buttonText : '#fff',
      fontSize: 20,
      //fontWeight: 'bold',
    },
    
    button:{
      alignItems:'center',
      backgroundColor: colors ? colors.button : 'black', // default if not set 
      fontSize: 24,
      padding: 15,
      margin: 4,
      width:'80%',
      borderRadius: 20,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeButton: {
      fontSize: 18,
      color: 'blue',
      marginTop: 20,
    },
    colorPickerButton: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: pickedColor,
      marginBottom: 20,
    },
    colorPickerButtonText: {
      color: colors ? colors.buttonText : '#fff',
      fontSize: 16,
    },
  });


  

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
      <View style={styles.titleContainer}><Text style={styles.title}>Add new task</Text></View>
      <Text style={styles.label}>Task name:</Text>
      <TextInput
        style={styles.input}
        value={taskName}
        onChangeText={text => setTaskName(text)}
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={text => setDescription(text)}
        multiline
      />

      
      {/*<TextInput
        style={styles.input}
        value={color}
        onChangeText={text => setColor(text)}
  />*/}

      <Text style={styles.label}>Estimated duration (minutes):</Text>
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={text => setTime(text)}
        keyboardType="numeric"
      />
      <Pressable
          style={styles.colorPickerButton}
          onPress={() => setShowColorPicker(true)}>
          <Text style={styles.colorPickerButtonText}>Choose color</Text>
      </Pressable>
      <ColorPicker
        isVisible={showColorPicker}
        onClose={() => setShowColorPicker(false)}
        onSelectColor={handleColorSelect}
      />

    <Text style={styles.label}>Date:</Text>
      <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>

      
      <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.goBack()} >
          <Text style={styles.buttonText}> Back </Text>  
        </TouchableOpacity>
        </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};



export default AddTaskScreen;