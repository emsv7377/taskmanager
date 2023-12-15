import React, { useState, useContext } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { TasksContext } from './TasksContext';
import DateTimePicker from '@react-native-community/datetimepicker';



const AddTaskScreen = ({ navigation }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#3498db'); // Default color
  const [time, setTime] = useState('');
  const { addTask } = useContext(TasksContext);
  const [tag, setTag] = useState(''); // State för att hålla taggen
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
      color: color,
      time: time,
      completed: false,
      date: date,
      subTasks: subTasks,
    };

    addTask(newTask);
    navigation.navigate('TaskList');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Task Name</Text>
      <TextInput
        style={styles.input}
        value={taskName}
        onChangeText={text => setTaskName(text)}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={text => setDescription(text)}
        multiline
      />

      <Text style={styles.label}>Sub Tasks</Text>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={subTaskName}
        onChangeText={text => setSubTaskName(text)}
        placeholder="Enter sub-task name"
      />
      <TouchableOpacity onPress={handleAddSubTask}>
        <Text>+</Text>
        </TouchableOpacity>
        </View>
        {subTasks.map(subTask => (
        <Text key={subTask.id}>{subTask.name}</Text>
      ))}

      <Text style={styles.label}>Color</Text>
      <TextInput
        style={styles.input}
        value={color}
        onChangeText={text => setColor(text)}
      />

      <Text style={styles.label}>Time</Text>
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
      <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // Additional styles for the container of date text and button
  },
  changeButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddTaskScreen;