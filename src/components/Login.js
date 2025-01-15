
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../components/store';
// import './Login.css';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const dispatch = useDispatch();

//   const handleLogin = () => {
//     if (password === 'password123') {
//       dispatch(login());
//       setError(''); // Clear any existing errors
//     } else {
//       setError('Invalid password. Please try again.');
//       alert('Invalid password. The correct password is: password123');
//     }
//   };

//   return (
//     <div className="login-page">
//       <h2>Welcome</h2>
//       <input
//         type="text"
//         placeholder="Enter your email id"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Enter your password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {error && <p className="error-message">{error}</p>}
//       <p>Please log in to access the application.</p>
//       <button onClick={handleLogin} className="login-button">Login</button>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../components/store';
import './Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email format validation

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password === 'password123') {
      dispatch(login());
      setError(''); // Clear any existing errors
    } else {
      setError('Invalid password. Please try again.');
      alert('Invalid password. The correct password is: password123');
    }
  };

  return (
    <div className="login-page">
      <h2>Welcome</h2>
      <input
        type="text"
        placeholder="Enter your email id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      <p>Please log in to access the application.</p>
      <button onClick={handleLogin} className="login-button">Login</button>
    </div>
  );
};

export default LoginPage;
