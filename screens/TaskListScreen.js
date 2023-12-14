import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TasksContext } from './TasksContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const TaskListScreen = ({navigation}) => {
  const { tasks } = useContext(TasksContext);
  const [currentDate, setCurrentDate] = useState(new Date());
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });  
  const formattedDate = dateFormatter.format(currentDate);
  const [selectedDate, setSelectedDate] = useState(formattedDate); // State för att hålla det valda datumet

  const handleNextDay = () => {
    const nextDay = new Date(currentDate);
    setCurrentDate(nextDay);
    nextDay.setDate(nextDay.getDate() + 1);
    console.log('nextday', nextDay);

    // Formatera nästa dag enligt önskat format
    const formattedDate = dateFormatter.format(nextDay);
    setSelectedDate(formattedDate);
  };

  const filteredTasks = tasks.filter(task => {
    const taskDate = new Date(task.date); // Antag att task.date är i formatet "YYYY-MM-DD"
    const day = selectedDate.split(' ')[2]; // Split by space and get the third part
    return taskDate.getDate() == day;
  });

  const renderTaskItem = ({ item }) => {
    const handleTaskPress = () => {
      // TODO: Handle when a task is pressed, e.g., navigate to task details
      // Example: navigation.navigate('TaskDetails', { taskId: item.id });
    };

    return (
      <TouchableOpacity onPress={handleTaskPress}>
        <View style={[styles.taskItem, { backgroundColor: item.color }]}>
          <Text style={styles.taskName}>{item.name}</Text>
          <Text style={styles.taskDescription}>{item.description}</Text>
          <Text style={styles.taskTime}>{item.time} mins</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.header}>
        <TouchableOpacity onPress={handleNextDay}>
          <Text style={styles.navigationText}>Next Day</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{selectedDate}</Text>
      </View>
      <FlatList
        data={filteredTasks}
        renderItem={renderTaskItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.taskList}
      />
        <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.goBack()} >
          <Text style={styles.buttonText}> Back </Text>  
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  taskList: {
    paddingBottom: 20,
  },
  taskItem: {
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  taskName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  taskDescription: {
    fontSize: 16,
    marginBottom: 5,
  },
  taskTime: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
          button:{
            alignItems:'center',
            fontSize: 24,
            padding: 15,
            margin: 4,
            width:'80%',
            borderRadius: 20,
          },
        buttonText:{
            fontSize: 20,
        },
});

export default TaskListScreen;
