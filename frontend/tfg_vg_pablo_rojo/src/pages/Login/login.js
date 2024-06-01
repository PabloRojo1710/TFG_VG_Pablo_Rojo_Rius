import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const requestOptions = {
      method: 'POST',
      body: formData, 
      credentials: 'include',
      cache: 'no-store'
    };

    try {
      const response = await fetch('http://localhost:5000/login', requestOptions);
      if (response.ok) {
        const data = await response.json();
        navigate("/");
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error sending login data', error);
    }
  };

  return (
    <div className="login-container-main">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group" style={{marginRight: "1rem"}}>
            <label htmlFor="email">Email</label>
            <input className="custom-input"
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group" style={{marginRight: "1rem"}}>
            <label htmlFor="password">Password</label>
            <input className="custom-input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="custom-btn" type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
