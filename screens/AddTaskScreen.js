import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { TasksContext } from './TasksContext';


const AddTaskScreen = ({ navigation }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#3498db'); // Default color
  const [time, setTime] = useState('');
  const { addTask } = useContext(TasksContext);
  const [tag, setTag] = useState(''); // State för att hålla taggen
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleAddTask = () => {
    // Code to add task to Today's list
    const newTask = {
      name: taskName,
      description: description,
      color: color,
      time: time,
      completed: false,
      tag: tag,
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

    <Text style={styles.label}>Date</Text>
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
  addButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
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