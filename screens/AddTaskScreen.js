import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import { TasksContext } from './TasksContext';
import ThemeContext from '../assets/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import ColorPicker from '../assets/ColorPicker';
import Styles from '../assets/Styles';

const AddTaskScreen = ({ navigation }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  //const [color, setColor] = useState('#3498db'); // Default color
  const [time, setTime] = useState('');
  const { addTask } = useContext(TasksContext);
  const [tag, setTag] = useState(''); // State för att hålla taggen
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const { theme } = useContext(ThemeContext);   // Fetch current theme
  const { colors: themeColors } = theme;                     // Fetch colors for components current theme 
  
  const [pickedColor, setPickedColor] = useState(themeColors ? themeColors.button : '#575A5E');  // TODO: change default value 
  const [showColorPicker, setShowColorPicker] = useState(false);
  const styles = Styles({themeColors, pickedColor});

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

  return (
    <SafeAreaView style={styles.addTaskContainer}>
      <KeyboardAwareScrollView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add new task</Text></View>
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