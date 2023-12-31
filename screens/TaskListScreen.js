import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TasksContext } from './TasksContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThemeContext from '../components/ThemeContext';
import Styles from '../components/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const TaskListScreen = ({navigation, route}) => {
  const { tasks, toggleTaskCompletion } = useContext(TasksContext);
  const [currentDate, setCurrentDate] = useState(new Date());
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });  
  const formattedDate = dateFormatter.format(currentDate);
  const [selectedDate, setSelectedDate] = useState(formattedDate); // State för att hålla det valda datumet
  const { theme } = useContext(ThemeContext);   // fetch current theme
  const { colors: themeColors } = theme;                     // Fetch colors for components current theme 
  const [pickedColor, setPickedColor] = useState(themeColors ? themeColors.buttonColor : '#575A5E');  // TODO: change default value 
  const [showColorPicker, setShowColorPicker] = useState(false);
  const styles = Styles({themeColors, pickedColor});

  const { entriesFilled } = route.params || {entriesFilled : false}

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
    const handleCompletion = () => {
      toggleTaskCompletion(item.id);
    };
    const handleMoreInfo = () => {
      navigation.navigate('Task', { taskId: item.id }); // Navigate to TaskDetails screen with taskId
    };

    return (
        <View style={[styles.taskItem, { backgroundColor: item.color }]}>
          <View style={styles.column3}>
          { item.category ? (
        <Ionicons name={item.category.icon} size={24} color={themeColors ? themeColors.iconColor : '#ffffff'} />
        ) : (
          <Text> </Text> 
        )}
        { item.priority ? (
          <Entypo name={item.priority.icon} size={24} color={themeColors ? themeColors.iconColor : '#ffffff'}/>
          ) : (
            <Text> </Text> 
        )}
          </View>
          <View style={styles.column1}>
          { item.name && (
          <Text style={styles.taskName}>{item.name}</Text>
          )}
          { item.description && (
          <Text style={styles.taskDescription}>{item.description}</Text>
          )}
          { item.time && (
          <Text style={styles.taskTime}>{item.time} mins</Text>
          )}
          </View>
          <View style={styles.column2}>
          <TouchableOpacity onPress={handleCompletion} style={styles.checkBox}>
          {item.completed ? (
            <Ionicons name={'close-outline'} size={30} color={themeColors ? themeColors.iconColor : '#ffffff'} />
          ) : (
            <Text> </Text> // Show an empty space for the unchecked checkbox 
          )}
        </TouchableOpacity>
        { (item.time || (item.subTasks && item.subTasks.length > 0)) && (
        <TouchableOpacity onPress={handleMoreInfo}>
        <Text style={styles.taskDescription}>More info {'>'}</Text>
        </TouchableOpacity>
        )}
        </View>
        </View>
    );
  };

  return (
    <SafeAreaView style={styles.addTaskContainer}>
     <View style={styles.titleContainer}>
        <Text style={styles.title}>{selectedDate}</Text>
      </View>
      <FlatList
        style={{width:'100%'}}
        data={filteredTasks}
        renderItem={renderTaskItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.taskList}
      />

    <View style={styles.cancelButtonPlacement}>
    {/* Changed navigation since all data is left on the screen if goBack() is used */}
      <TouchableOpacity 
                style={styles.backButton}
                onPress={() => navigation.navigate('AddTask')} >
          <Text style={styles.buttonText}>Return</Text>  
        </TouchableOpacity>
          <TouchableOpacity onPress={handleNextDay} style={styles.addButton}>
          <Text style={styles.buttonText}>Next Day</Text>
        </TouchableOpacity>
        
        </View>
    </SafeAreaView>
  );
};

export default TaskListScreen;
