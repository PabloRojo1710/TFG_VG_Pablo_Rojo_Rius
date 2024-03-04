import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/login';
import Home from './pages/Home/Home';
import TablesPage from './pages/Tables/TablesPage';
import PlayersPage from './pages/Players/PlayersPage';
import SettingsPage from './pages/Settings/SettingsPage'; 

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/tables" element={<TablesPage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
