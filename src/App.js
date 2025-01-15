// import './App.css';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import MainTask from './components/Main';
// import { useSelector, useDispatch } from "react-redux";
// import LoginPage from './components/Login';
// import { logout } from '../src/components/store'; 
// import TaskDetails from './components/TaskDetails';
// // Ensure the `logout` action is imported

// function App() {
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <div className="App">
//       {isLoggedIn ? (
//         <>
//           <Navbar />
//           <div className="main-container">
//             <Sidebar handleLogout={handleLogout} />
//             <MainTask />
//             <TaskDetails/>
//           </div>
//         </>
//       ) : (
//         <LoginPage />
//       )}
//     </div>
//   );
// }

// export default App;


import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainTask from './components/Main';
import { useSelector, useDispatch } from "react-redux";
import LoginPage from './components/Login';
import { logout } from './components/store'; 
import TaskDetails from './components/TaskDetails';
import React, { useState } from "react";
function App() {

const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  // Example task data (replace with actual data)
  const task = {
    id: 1,
    title: "Buy groceries"
  };

  const handleTaskClose = (taskId) => {
    console.log(`Task with ID ${taskId} closed or deleted.`);
    // You can handle task deletion or closing here
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Navbar toggleSidebar={toggleSidebar} />
          <div className={`main-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
            <Sidebar handleLogout={handleLogout} isSidebarOpen={isSidebarOpen} />
            <MainTask />
            <TaskDetails task={task} onClose={handleTaskClose} />
          </div>
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
