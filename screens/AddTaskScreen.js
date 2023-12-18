import React, { useState, useContext } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import { TasksContext } from './TasksContext';
import ThemeContext from '../components/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import ColorPicker from '../components/ColorPicker';
import Styles from '../components/Styles';

const AddTaskScreen = ({ navigation }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const { addTask } = useContext(TasksContext);
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });  
  const formattedDate = dateFormatter.format(date);
  const [subTaskName, setSubTaskName] = useState('');
  const [subTasks, setSubTasks] = useState([]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  const { theme } = useContext(ThemeContext);   // Fetch current theme
  const { colors: themeColors } = theme;                     // Fetch colors for components current theme 
  
  const [pickedColor, setPickedColor] = useState(themeColors ? themeColors.button : '#575A5E');  // TODO: change default value 
  const [showColorPicker, setShowColorPicker] = useState(false);
  const styles = Styles({themeColors, pickedColor});

  const handleColorSelect = (selectedColor) => {
    setPickedColor(selectedColor);
    setShowColorPicker(false);
  };

  const showTimepicker = () => {
    showMode('time');
  };

  //Generate a random id
 function generateUUID(digits) {
    let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';
    let uuid = [];
    for (let i = 0; i < digits; i++) {
        uuid.push(str[Math.floor(Math.random() * str.length)]);
    }
    return uuid.join('');
}

// Function to handle adding sub-tasks
const handleAddSubTask = () => {
  if (subTaskName.trim() !== '') {
    const newSubTask = {
      id: generateUUID(10), // Generate unique ID for sub-task
      name: subTaskName.trim(),
      completed: false,
    };
    setSubTasks([...subTasks, newSubTask]);
    setSubTaskName(''); // Clear input field after adding
  }
};
  const handleAddTask = () => {
    const taskId = generateUUID(10);
    // Code to add task to Today's list
    const newTask = {
      id: taskId, // Assign the generated ID to the task
      name: taskName,
      description: description,
      color: pickedColor,
      time: time,
      completed: false,
      date: date,
      subTasks: subTasks,
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

      <Text style={styles.label}>Sub Tasks</Text>
      <TextInput
        style={styles.input}
        value={subTaskName}
        onChangeText={text => setSubTaskName(text)}
        placeholder="Enter sub-task name"
        onSubmitEditing={handleAddSubTask} // Triggered when "Enter" is pressed
      />
        {subTasks.map(subTask => (
        <Text style={styles.displaySubtasks}key={subTask.id}>{subTask.name}</Text>
      ))}
      <Text style={styles.label}>Choose a color: </Text>
      <Pressable
          style={styles.colorPickerButton}
          onPress={() => setShowColorPicker(true)}>
          <Text style={styles.colorPickerButtonText}>color</Text>
      </Pressable>
      <ColorPicker
        isVisible={showColorPicker}
        onClose={() => setShowColorPicker(false)}
        onSelectColor={handleColorSelect}
      />

      <Text style={styles.label}>Estimated duration (minutes):</Text>
        <TextInput
          style={styles.input}
          value={time}
          onChangeText={text => setTime(text)}
          keyboardType="numeric"
        />

  <View style={styles.dateContainer}>
    <Text style={styles.label}>Date: {formattedDate}</Text>
    <TouchableOpacity onPress={showDatepicker} style={styles.changeButton}>
        <Text style={styles.buttonText}>Change</Text>
      </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      {/* Add task & back-buttons  */}
      <View style={styles.cancelButtonPlacement}>
        <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()} >
          <Text style={styles.buttonText}> Cancel </Text>  
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>      
      </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AddTaskScreen;