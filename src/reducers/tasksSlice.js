// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   taskItems: [],
// };

// export const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState,
//   reducers: {
//     addTask: (state, action) => {
//       state.taskItems.push(action.payload.taskList); 
//       console.log(state.taskItems[0]); 
//     },
//   },
// });

// export const { addTask } = tasksSlice.actions;

// export default tasksSlice.reducer;
 

// src/reducers/tasksSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  taskItems: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTasks: (state, action) => {
      state.taskItems = action.payload.taskList; // Replace task list with the provided list
    },
    addTask: (state, action) => {
      state.taskItems.push(action.payload.task); // Push a new task into the array
    },
    deleteTask: (state, action) => {
      const taskIndex = state.taskItems.findIndex((task) => task.id === action.payload.taskId);
      if (taskIndex !== -1) {
        state.taskItems.splice(taskIndex, 1); // Remove the task with the specified ID
      }
    },
    updateTask: (state, action) => {
      const { taskId, updatedTask } = action.payload;
      const taskIndex = state.taskItems.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        state.taskItems[taskIndex] = updatedTask; // Update the task with the specified ID
      }
    },
  },
});

export const { addTasks, addTask, deleteTask, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;
