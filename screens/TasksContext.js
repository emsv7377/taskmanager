import React, { createContext, useState } from 'react';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Function to toggle the completion status of a task based on ID
  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleSubTaskCompletion = (taskId, subTaskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId && task.subTasks) {
          const updatedSubTasks = task.subTasks.map((subTask) =>
            subTask.id === subTaskId ? { ...subTask, completed: !subTask.completed } : subTask
          );
          return { ...task, subTasks: updatedSubTasks };
        }
        return task;
      })
    );
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, toggleTaskCompletion, toggleSubTaskCompletion }}>
      {children}
    </TasksContext.Provider>
  );
};