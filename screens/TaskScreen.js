import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native';
import { TasksContext } from './TasksContext';

const TaskDetailsScreen = ( {route, navigation} ) => {
  // Fetch task details based on the taskId
  const { tasks, toggleSubTaskCompletion, toggleTaskCompletion } = useContext(TasksContext);
  const { taskId } = route.params;
  const [taskDetails, setTaskDetails] = useState(null);

// Check if all subtasks are completed or if there are no subtasks
const areAllSubtasksCompleted = taskDetails?.subTasks?.every((subTask) => subTask.completed) || !taskDetails?.subTasks?.length;

  useEffect(() => {
    if (tasks && tasks.length > 0) {
      const task = tasks.find((task) => task.id === taskId);
      if (task) {
        setTaskDetails(task);
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
            <TouchableOpacity
              key={subTask.id}
              onPress={() => handleSubtaskToggle(subTask.id)}
              style={styles.subTaskContainer}
            >
              <Text style={subTask.completed ? styles.completedSubTask : styles.subTask}>
                {subTask.name}
              </Text>
              <View style={styles.checkbox}>
                {subTask.completed && <Text>X</Text>} 
              </View>
            </TouchableOpacity>
          ))}
        </>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={taskDetails ? { backgroundColor: taskDetails.color } : null}>
           {taskDetails ? (
        <View style={styles.container}>
          <Text style={styles.taskName}>{taskDetails.name}</Text>
          <Text style={styles.description}>{taskDetails.description}</Text>
          <Text style={styles.time}>Time: {taskDetails.time} mins</Text>
          {renderSubTasks()}
        </View>
      ) : (
        <Text>Loading task details...</Text>
      )}
         {areAllSubtasksCompleted || !taskDetails.subTasks || taskDetails.subTasks.length === 0 ? (
        <TouchableOpacity onPress={handleDoneButtonPress} disabled={!(areAllSubtasksCompleted || !taskDetails.subTasks || taskDetails.subTasks.length === 0)}>
          <Text>Done</Text>
        </TouchableOpacity>
      ) : (
        <Text>Complete all subtasks to enable Done button</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
      },
      taskName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      description: {
        marginBottom: 15,
      },
      time: {
        marginBottom: 15,
      },
      subTasksTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      subTaskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      },
      subTask: {
        fontSize: 16,
        marginRight: 10,
      },
      completedSubTask: {
        fontSize: 16,
        marginRight: 10,
        textDecorationLine: 'line-through',
      },
      checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
  });

export default TaskDetailsScreen;