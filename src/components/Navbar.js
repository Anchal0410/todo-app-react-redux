
// import React, { useState } from "react";
// import { FaBars, FaSearch, FaTh, FaMoon, FaSun } from "react-icons/fa";
// import logo from "./todo-logo.png";

// const Navbar = ({ toggleSidebar }) => {
//   const [darkTheme, setDarkTheme] = useState(false);

//   const toggleTheme = () => {
//     setDarkTheme(!darkTheme);
//     document.body.className = darkTheme ? "light-theme" : "dark-theme";
//   };

//   return (
//     <div className={`navbar ${darkTheme ? "dark" : "light"}`}>
//       <div className="navbar-left">
//         <FaBars className="icon" onClick={toggleSidebar} /> {/* Toggles the sidebar */}
//         <img src={logo} alt="logo" className="profile-pic" />
//         <h1 className="navbar-title">DoIt</h1>
//       </div>
//       <div className="navbar-right">
//         <FaSearch className="icon" />
//         <FaTh className="icon" />
//         <button className="theme-toggle-btn" onClick={toggleTheme}>
//           {darkTheme ? <FaSun className="icon" /> : <FaMoon className="icon" />}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { FaBars, FaSearch, FaTh, FaMoon, FaSun } from "react-icons/fa";
import logo from "./todo-logo.png";

const Navbar = ({ toggleSidebar }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.className = darkTheme ? "light-theme" : "dark-theme";
  };

  return (
    <div className={`navbar ${darkTheme ? "dark" : "light"}`}>
      <div className="navbar-left">
        {/* Call toggleSidebar to toggle the sidebar */}
        <FaBars className="icon" onClick={toggleSidebar} />
        <img src={logo} alt="logo" className="profile-pic" />
        <h1 className="navbar-title">DoIt</h1>
      </div>
      <div className="navbar-right">
        <FaSearch className="icon" />
        <FaTh className="icon" />
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {darkTheme ? <FaSun className="icon" /> : <FaMoon className="icon" />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
