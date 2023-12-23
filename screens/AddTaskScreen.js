import React, { useState, useContext, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import { TasksContext } from './TasksContext';
import ThemeContext from '../components/ThemeContext';
import ColorPicker from '../components/ColorPicker';
import CategoryPicker from '../components/CategoryPicker';
import PriorityPicker from '../components/PriorityPicker';
import Styles from '../components/Styles';

const AddTaskScreen = ({ navigation }) => {
  
  /** style options  */
  const { theme } = useContext(ThemeContext);
  const { colors: themeColors } = theme;
  const styles = Styles({themeColors, pickedColor});

  /* data for tasks */
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

  // Checks if task is empty or not 
  const [entriesFilled, setEntriesFilled] = useState(false);

  useEffect(() => {
    // Check if any of the required fields are filled
    const anyEntryFilled =
      taskName.trim() !== '' ||
      description.trim() !== '' ||
      subTasks.length > 0 ||
      time.trim() !== '';

    setEntriesFilled(anyEntryFilled);
  }, [taskName, description, subTasks, time]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(!show);
    setMode(currentMode);
  };

  // TODO: something happens with the whole layout when the show date is true
  const showDatepicker = () => {
    showMode('date');
  };

  
  const [pickedColor, setPickedColor] = useState('#575A5E');  // TODO: change default value 
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showCategoryPicker, setShowCategoryPicker] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState(0);
  const [showPriorityPicker, setShowPriorityPicker] = useState(false);



  // Handles selection of color 
  const handleColorSelect = (selectedColor) => {
    setPickedColor(selectedColor);
    setShowColorPicker(false);
  };

  // Handles selection of category 
  const handleCategorySelect = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    setShowCategoryPicker(false);
  }

  // Handles selection of priority 
  const handlePrioritySelect = (selectedPriority) => {
    setSelectedPriority(selectedPriority);
    setShowPriorityPicker(false);
  }

  const showTimepicker = () => {
    showMode('time');
  };

  // Generate a random id
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
      //category: selectedCategory,
      //priority: selectedPriority, 
    };

    addTask(newTask);
    navigation.navigate('TaskList', { entriesFilled });
  };


  return (
    <SafeAreaView style={styles?.addTaskContainer}>
      <KeyboardAwareScrollView 
        style={styles?.keyboardAwareScrollView}
        contentContainerStyle={styles?.contentContainer}>

        {/* Title of page */}
        <View style={styles?.titleContainer}>
          <Text style={styles?.title}>Add new task </Text>
        </View>
        {/* Container for date picker */}
        <View style={styles?.dateContainer}>
          {/* Ensures that the whole section of date is on the same row */}
          <TouchableOpacity onPress={showDatepicker} 
              style={styles.dateRow}>
                  <Text style={styles?.dateLabel}>Date:</Text>
                <Text style={[styles?.dateLabel, {marginLeft: 10, marginTop: 0, marginRight: 20, fontSize: 16, alignSelf: 'center', fontWeight:'normal'}]}> {formattedDate}</Text>
                <Ionicons name='calendar-outline' size={24} color={themeColors.textColor} />
            </TouchableOpacity>
          {show && (
            <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
            />
            )}
          
          </View> 
        {/* End of date container */}
        
        <View style={styles?.textInputContainer}>
          <Text style={styles?.label}>Task name:</Text>
          <TextInput
            style={styles?.input}
            value={taskName}
            onChangeText={text => setTaskName(text)}
          />
          
          <Text style={styles?.label}>Description:</Text>
          <TextInput
            style={styles?.input}
            value={description}
            onChangeText={text => setDescription(text)}
            multiline
          />
          {/* TODO: multiline makes the input box look weird  */}
      
        <Text style={styles?.label}>Sub tasks:</Text>
        <TextInput
          style={styles?.input}
          value={subTaskName}
          onChangeText={text => setSubTaskName(text)}
          placeholder="Enter name of sub task"
          onSubmitEditing={handleAddSubTask} // Triggered when "Enter" is pressed
        />
        <View style={styles.subtasklist}>
        {subTasks.map(subTask => (
          <View style={styles.subtasklistContainer} key={subTask.id}>
          <Text style={styles?.displaySubtasks}key={subTask.id}>{subTask.name}</Text>
          </View>
        ))}
        </View>
        <Text style={styles?.label}>Estimated duration (minutes):</Text>
          <TextInput
            style={styles?.input}
            value={time}
            onChangeText={text => setTime(text)}
            keyboardType="numeric"
          />
          
        {/** Wrap color & category picker in a View */}
        <View style={styles?.pickerContainer}>
          {/* Makes a grid so label is symmetric to its corresponding pressable */}
          <View style={styles?.pickerColumn}>
          <Text style={[styles?.label, styles?.pickerText]}>Color</Text>
            <Pressable
              style={[styles?.colorPickerButton, {backgroundColor: pickedColor}]}
              onPress={() => setShowColorPicker(true)}>
              {/*<Text style={styles?.colorPickerButtonText}>{pickedColor}</Text>*/}
          </Pressable>
          <ColorPicker
            isVisible={showColorPicker}
            onClose={() => setShowColorPicker(false)}
            onSelectColor={handleColorSelect}
          />
          </View>
          {/* Category picker */}
          <View style={styles?.pickerColumn}>
            <Text style={[styles?.label, styles?.pickerText]}>Category</Text>
            <Pressable
              style={[styles?.colorPickerButton, {backgroundColor: themeColors ? themeColors.buttonColor : '#000000',}]}
              onPress={() => setShowCategoryPicker(true)}>
              {/* Display the selected category icon */}
                {selectedCategory && (
                  <Ionicons name={selectedCategory.icon} size={24} color={themeColors ? themeColors.icon : '#ffffff'} />
                )}
            </Pressable>
            <CategoryPicker
              isVisible={showCategoryPicker}
              onClose={() => setShowCategoryPicker(false)}
              onSelectCategory={handleCategorySelect}
            />
          </View>
          {/* Priority picker */}
          <View style={styles?.pickerColumn}>
            <Text style={[styles?.label, styles?.pickerText]}>Priority</Text>
          <Pressable
            style={[styles?.colorPickerButton, {backgroundColor: themeColors ? themeColors.buttonColor : '#000000',}]}
            onPress={() => setShowPriorityPicker(true)}>
            {/* Display the selected priority icon */}
                  <Entypo name={selectedPriority.icon} size={24} color={themeColors ? themeColors.icon : '#ffffff'}/>
          </Pressable>
          <PriorityPicker
            isVisible={showPriorityPicker}
            onClose={() => setShowPriorityPicker(false)}
            onSelectPriority={handlePrioritySelect}
          />
          </View>
        </View>
      </View>
  
      
      {/* Cancel and 'Add task'-buttons  */}
      <View style={styles?.cancelButtonPlacement}>
        <TouchableOpacity 
            style={styles?.backButton}
            onPress={() => navigation.goBack()} >
          <Text style={styles?.buttonText}> Cancel </Text>  
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddTask} style={styles?.addButton}>
          <Text style={styles?.buttonText}>Add Task</Text>
        </TouchableOpacity>      
      </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AddTaskScreen;