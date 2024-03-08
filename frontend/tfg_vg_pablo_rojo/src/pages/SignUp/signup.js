import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [enterprise, setEnterprise] = useState('');


  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('name', name);
    formData.append('surname', surname);
    formData.append('enterprise', enterprise);

    // Opciones de la solicitud fetch sin 'Content-Type' en los headers
    const requestOptions = {
      method: 'POST',
      body: formData, 
      credentials: 'include'
    };

    try {
      const response = await fetch('http://localhost:5000/register', requestOptions);
      if (response.ok) {
        const data = await response.json();
        console.log('Register successful', data);
        // Aquí puedes manejar la respuesta, como redireccionar al usuario o guardar el token de sesión
        navigate("/login");
      } else {
        console.error('Register failed');
      }
    } catch (error) {
      console.error('Error sending register data', error);
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
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Enterprise Name</label>
            <input
              type="text"
              id="enterprise"
              value={enterprise}
              onChange={(e) => setEnterprise(e.target.value)}
            />
          </div>
          <button type="submit">SignUp</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
