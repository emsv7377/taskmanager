import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TasksContext } from './TasksContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThemeContext from '../components/ThemeContext';

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
  const { theme } = useContext(ThemeContext);   // fetch current theme
  const { colors } = theme;                     // fetch colors of current theme

  const handleNextDay = () => {
    const nextDay = new Date(currentDate);
    setCurrentDate(nextDay);
    nextDay.setDate(nextDay.getDate() + 1);
    console.log('nextday', nextDay);

    // Skapa en instans av DateTimeFormat
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  
    // Formatera nästa dag enligt önskat format
    const formattedDate = dateFormatter.format(nextDay);
    console.log(formattedDate);
    setSelectedDate(formattedDate);
  };

  // Filtrera tasks baserat på valt datum
  const filteredTasks = tasks.filter(task => {
    return task.tag === selectedDate; // Jämför taggen med det valda datumet
  });

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: colors ? colors.background : 'white',
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
});

  const renderTaskItem = ({ item }) => {
    const handleTaskPress = () => {
      // Handle when a task is pressed, e.g., navigate to task details
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
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.taskList}
      />
    </SafeAreaView>
  );
};



export default TaskListScreen;
