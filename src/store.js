
// import {configureStore} from '@reduxjs/toolkit';
// import tasksSlice from './reducers/tasksSlice';



// export const store = configureStore({
//     reducer:{tasks:tasksSlice}
// })



import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tasksReducer from './reducers/tasksSlice';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  
});

const store = configureStore({
  reducer: rootReducer,
  
});

export default store;
