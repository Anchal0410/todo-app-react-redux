import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./store";
import { FaHome, FaStar, FaCalendar, FaTasks, FaPlus } from "react-icons/fa";
import logo from './pp.png';
import Login from './Login'

const Sidebar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="sidebar">
      <div className="profile-section">
        <img src={logo} alt="profile" className="profile-pic" />
        <h3 className="profile-name">Hey, "ABCD" </h3>
        <button
          className="auth-button"
          onClick={() => (isLoggedIn ? dispatch(logout()) : dispatch(login()))}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>

      { (
        <>
          <nav className="menu">
            <ul>
              <li className="menu-item active">
                <FaHome className="menu-icon" />
                <span>All Tasks</span>
              </li>
              <li className="menu-item">
                <FaTasks className="menu-icon" />
                <span>Today</span>
              </li>
              <li className="menu-item">
                <FaStar className="menu-icon" />
                <span>Important</span>
              </li>
              <li className="menu-item">
                <FaCalendar className="menu-icon" />
                <span>Planned</span>
              </li>
              <li className="menu-item">
                <FaTasks className="menu-icon" />
                <span>Assigned to me</span>
              </li>
            </ul>
          </nav>

          <div className="add-list">
            <FaPlus className="menu-icon" />
            <span>Add list</span>
          </div>

          <div className="tasks-overview">
            <h4>Today Tasks</h4>
            <div className="circle-container">
              <div className="circle">
                <div className="circle-inner">
                  <span className="task-count">11</span>
                </div>
                <div className="circle-overlay">
                  <div className="pending-arc"></div>
                </div>
              </div>
              <div className="legend">
                <div>
                  <span className="pending-dot"></span> Pending
                </div>
                <div>
                  <span className="done-dot"></span> Done
                </div>
              </div>
            </div>
          </div>
        </>
      ) }
    </div>
  );
};

export default Sidebar;
