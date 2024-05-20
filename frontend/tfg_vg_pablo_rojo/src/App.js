import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/login';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/signup';
import Logout from './pages/Logout/logout';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Home page="home" />} />
        <Route path="/tables" element={<Home page="tables" />} />
        <Route path="/players" element={<Home page="players" />} />
        <Route path="/settings" element={<Home page="settings" />} />
        <Route path="/logs" element={<Home page="logs" />} />
      </Routes>
    </div>
  );
}

export default App;
