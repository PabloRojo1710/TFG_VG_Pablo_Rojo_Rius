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

    // Opciones de la solicitud fetch sin 'Content-Type' en los headers
    const requestOptions = {
      method: 'POST',
      body: formData, 
      credentials: 'include'
    };

    try {
      const response = await fetch('http://localhost:5000/login', requestOptions);
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful', data);
        // Aquí puedes manejar la respuesta, como redireccionar al usuario o guardar el token de sesión
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
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
