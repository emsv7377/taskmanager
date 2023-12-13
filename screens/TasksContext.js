import React, { createContext, useState } from 'react';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask }}>
      {children}
    </TasksContext.Provider>
  );
};