// import React, { useState } from "react";
// import { FaRegStar, FaStar, FaRegCheckCircle } from "react-icons/fa";

// const MainTask = () => {
//   const [tasks, setTasks] = useState([
//     { id: 1, text: "Buy groceries", isDone: false, isPriority: false },
//     { id: 2, text: "Finish project report", isDone: false, isPriority: false },
//     { id: 3, text: "Call the bank", isDone: false, isPriority: true },
//     { id: 4, text: "Schedule dentist appointment", isDone: false, isPriority: false },
//     { id: 5, text: "Plan weekend trip", isDone: false, isPriority: false },
//   ]);

// const [completedTasks, setCompletedTasks] = useState([
//     { id: 6, text: "Read a book", completed: true },
//     { id: 7, text: "Clean the house", completed: true },
//     { id: 8, text: "Prepare presentation", completed: true },
//     { id: 9, text: "Update blog", completed: true },
//     ]);

//     const [newTask, setNewTask] = useState("");

//   const addTask = () => {
//     if (newTask.trim() === "") return;
//     setTasks([...tasks, { id: Date.now(), text: newTask, isDone: false, isPriority: false }]);
//     setNewTask("");
//   };

//   const toggleDone = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, isDone: !task.isDone } : task
//       )
//     );
//   };

//   const togglePriority = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, isPriority: !task.isPriority } : task
//       )
//     );
//   };

//   return (
//     <div className="main-task">
//       <div className="task-input">
//         <input
//           type="text"
//           placeholder="Add a Task"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button onClick={addTask}>ADD TASK</button>
//       </div>
//       <div className="task-list">
//         {tasks.map((task) => (
//           <div
//             key={task.id}
//             className={`task-item ${task.isDone ? "completed" : ""}`}
//           >
//             <div className="task-details">
//               <input
//                 type="checkbox"
//                 checked={task.isDone}
//                 onChange={() => toggleDone(task.id)}
//               />
//               <span className="task-text">{task.text}</span>
//             </div>
//             <div className="task-actions">
//               <button
//                 className="priority-btn"
//                 onClick={() => togglePriority(task.id)}
//               >
//                 {task.isPriority ? <FaStar color="#F4B400" /> : <FaRegStar />}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="task-section">
//         <h4>Completed</h4>
//         <ul>
//           {completedTasks.map((task) => (
//             <li key={task.id} className="task-item completed">
//               <input type="checkbox" checked />
//               <span>{task.text}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MainTask;



// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchWeather } from "./weatherSlice";
// import { FaRegStar, FaStar, FaRegCheckCircle } from "react-icons/fa";
// const MainTask = () => {
//   const [completedTasks, setCompletedTasks] = useState([
//       { id: 6, text: "Read a book", completed: true },
//       { id: 7, text: "Clean the house", completed: true },
//       { id: 8, text: "Prepare presentation", completed: true },
//       { id: 9, text: "Update blog", completed: true },
//       ]);
//   const [tasks, setTasks] = useState([
//     { id: 1, text: "Buy groceries", isDone: false, isPriority: false },
//     { id: 2, text: "Go hiking", isDone: false, isPriority: false },
//   ]);

//   const [newTask, setNewTask] = useState("");
//   const dispatch = useDispatch();
//   const weather = useSelector((state) => state.weather);

//   const addTask = () => {
//     if (newTask.trim() === "") return;
//     setTasks([...tasks, { id: Date.now(), text: newTask, isDone: false, isPriority: false }]);
//     setNewTask("");
//   }; 

//   const handleFetchWeather = (taskText) => {
//     dispatch(fetchWeather(taskText));
//   }; 

//   return (
//     <div className="main-task">
//       <div className="task-input">
//         <input
//           type="text"
//           placeholder="Add a Task"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button onClick={addTask}>ADD TASK</button>
//       </div>
//       <div className="task-list">
//         {tasks.map((task) => (
//           <div
//             key={task.id}
//             className={`task-item ${task.isDone ? "completed" : ""}`}
//           >
//             <div className="task-details">
//               <input
//                 type="checkbox"
//                 checked={task.isDone}
//                 onChange={() =>
//                   setTasks(tasks.map((t) =>
//                     t.id === task.id ? { ...t, isDone: !t.isDone } : t
//                   ))
//                 }
//               />
//               <span className="task-text">{task.text}</span>
//               <button onClick={() => handleFetchWeather(task.text)}>Check Weather</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {weather.loading && <p>Loading weather data...</p>}
//       {weather.error && <p className="error">{weather.error.message}</p>}
//       {weather.data && (
//         <div className="weather-info">
//           <h4>Weather for {weather.data.name}</h4>
//           <p>Temperature: {weather.data.main.temp}°C</p>
//           <p>Conditions: {weather.data.weather[0].description}</p>
//         </div>
//       )}
//       <div className="task-section">
//          <h4>Completed</h4>
//          <ul>
//            {completedTasks.map((task) => (
//             <li key={task.id} className="task-item completed">
//               <input type="checkbox" checked />
//               <span>{task.text}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MainTask; 



import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./weatherSlice";
import { FaRegCheckCircle } from "react-icons/fa";

const MainTask = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", isDone: false },
    { id: 2, text: "Go hiking", isDone: false },
    { id: 3, text: "Read a book", isDone: true },
    { id: 4, text: "Clean the house", isDone: true },
  ]);
  const [newTask, setNewTask] = useState("");

  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, isDone: false }]);
    setNewTask("");
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const handleFetchWeather = (taskText) => {
    dispatch(fetchWeather(taskText));
  };

  // Separate tasks into completed and not completed for proper ordering
  const notCompletedTasks = tasks.filter((task) => !task.isDone);
  const completedTasks = tasks.filter((task) => task.isDone);

  return (
    <div className="main-task">
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>ADD TASK</button>
      </div>

      <div className="task-list">
        {/* Not Completed Tasks */}
        {notCompletedTasks.map((task) => (
          <div
            key={task.id}
            className={`task-item ${task.isDone ? "completed" : ""}`}
          >
            <div className="task-details">
              <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <span className="task-text">{task.text}</span>
              <button onClick={() => handleFetchWeather(task.text)}>
                Check Weather
              </button>
            </div>
          </div>
        ))}

        {/* Completed Tasks */}
        {completedTasks.map((task) => (
          <div
            key={task.id}
            className={`task-item ${task.isDone ? "completed" : ""}`}
          >
            <div className="task-details">
              <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <span className="task-text">{task.text}</span>
              <FaRegCheckCircle className="completed-icon" />
            </div>
          </div>
        ))}
      </div>

      {weather.loading && <p>Loading weather data...</p>}
      {weather.error && <p className="error">{weather.error.message}</p>}
      {weather.data && (
        <div className="weather-info">
          <h4>Weather for {weather.data.name}</h4>
          <p>Temperature: {weather.data.main.temp}°C</p>
          <p>Conditions: {weather.data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default MainTask;
