import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text ,StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { TasksContext } from './TasksContext';
import Styles from '../components/Styles';
import ThemeContext from '../components/ThemeContext';
import Timer from './TimerScreen';

const TaskScreen = ( {route, navigation} ) => {
  // Fetch task details based on the taskId
  const { tasks, toggleSubTaskCompletion, toggleTaskCompletion } = useContext(TasksContext);
  const { taskId } = route.params;
  const [taskDetails, setTaskDetails] = useState(null);
  const { theme } = useContext(ThemeContext);   // fetch current theme
  const { colors: themeColors } = theme;                     // Fetch colors for components current theme
  const styles = Styles({themeColors});
// Check if all subtasks are completed or if there are no subtasks
const areAllSubtasksCompleted = taskDetails?.subTasks?.every((subTask) => subTask.completed) || !taskDetails?.subTasks?.length;

  useEffect(() => {
    console.log("här")
    if (tasks && tasks.length > 0) {
      const task = tasks.find((task) => task.id === taskId);
      if (task) {
        setTaskDetails(task);
        console.log(taskDetails);
      }
    }
  }, [tasks, taskId]);

  const handleDoneButtonPress = () => {
    if (areAllSubtasksCompleted || !taskDetails.subTasks || taskDetails.subTasks.length === 0) {
      toggleTaskCompletion(taskId); // Mark the task as completed
      navigation.navigate('TaskList'); // Navigate back to TaskListScreen
    }
  };

  const handleSubtaskToggle = (subTaskId) => {
    toggleSubTaskCompletion(taskDetails.id, subTaskId); // Anropa toggleSubTaskCompletion med taskId och subTaskId
    // Update taskDetails after toggling subtask completion
    const updatedTask = { ...taskDetails };
    const updatedSubTasks = updatedTask.subTasks.map((subTask) =>
      subTask.id === subTaskId ? { ...subTask, completed: !subTask.completed } : subTask
    );
    updatedTask.subTasks = updatedSubTasks;
    setTaskDetails(updatedTask);
  };

  const renderSubTasks = () => {
    if (taskDetails && taskDetails.subTasks && taskDetails.subTasks.length > 0) {
      return (
        <>
          <Text style={styles.subTasksTitle}>Subtasks:</Text>
          {taskDetails.subTasks.map((subTask) => (
          <View style={styles.subTaskContainer} key={subTask.id}>
          <Text style={styles.subTask}>{subTask.name}</Text>
          <View style={styles.column2}>
          <TouchableOpacity onPress={() => handleSubtaskToggle(subTask.id)}>
            <View style={styles.checkBox}>
              {subTask.completed && <Text>X</Text>}
            </View>
          </TouchableOpacity>
          </View>
          </View>
          ))}
        </>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.addTaskContainer}>
      <ScrollView>
      <View style={[taskDetails && { backgroundColor: taskDetails.color }, styles.additionalStyle]}>
        {taskDetails && (
          <View style={styles.menuHeader}>
          <View style={styles.tasknameContainer}>
          <Text style={styles.taskTitle}>{taskDetails.name}</Text>
          </View>
          <Text style={styles.taskDescription}>{taskDetails.description}</Text>
          </View>
          )}
          <View>
          {renderSubTasks()}
          </View>
      </View>
      {taskDetails && taskDetails.time && (
      <Timer navigation={navigation} route={{ params: taskDetails.time }} />
      )}
               {areAllSubtasksCompleted || !taskDetails.subTasks || taskDetails.subTasks.length === 0 ? (
        <TouchableOpacity style={styles.twobutton} onPress={handleDoneButtonPress} disabled={!(areAllSubtasksCompleted || !taskDetails.subTasks || taskDetails.subTasks.length === 0)}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.buttonText}>Complete all subtasks to enable Done button</Text>
      )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskScreen;