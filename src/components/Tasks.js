// import "./../styles/Tasks.css";

// function Tasks() {

//     return (
//         <div className="tasks">
//             <h2>Tasks</h2>
//             <div className="filters">
//                 <span>Filters:</span>
//                 <div className="sort-filter">
//                     <div className="sorting">
//                         <small>By Status:</small>
//                         <select>
//                             <option>Select</option>
//                         </select>
//                     </div>
//                     <div className="sorting">
//                         <small>By Tags:</small>
//                         <select>
//                             <option>Select</option>
//                         </select>
//                     </div>
//                     <div className="sorting">
//                         <small>Sort By:</small>
//                         <select>
//                             <option>Select</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default Tasks
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../reducers/tasksSlice';
import './../styles/Tasks.css';
function Tasks() {
    const tasks = useSelector((state) => state.tasks.taskItems); // Access the taskItems array from the Redux store
    const dispatch = useDispatch();
  
    const handleDeleteTask = (taskId) => {
      // Dispatch the deleteTask action with the task ID
      dispatch(deleteTask({ taskId }));
    };
  
    const handleUpdateTask = (taskId, updatedTask) => {
      // Dispatch the updateTask action with the task ID and updated task object
      dispatch(updateTask({ taskId, updatedTask }));
    };
  
    return (
      <div className="tasks">
        <h2>Tasks</h2>
        <div className="filters">
          {/* Add your filtering and sorting options here */}
        </div>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id}>
              {/* Display task information */}
              <span>{task.title}</span>
              {/* Add other task details here */}
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              <button onClick={() => handleUpdateTask(task.id, { ...task, completed: !task.completed })}>
                Toggle Completed
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Tasks;
  