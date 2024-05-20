import React, { useEffect, useState }from 'react';
import Cookies from 'js-cookie'
import Navbar from '../../components/Navbar';
import TablesPage from '../Tables/TablesPage';
import PlayersPage from '../Players/PlayersPage';
import SettingsPage from '../Settings/SettingsPage';
import LogsPage from '../Logs/LogsPage'
import WelcomePage from '../Welcome/WelcomePage'
import { useNavigate } from 'react-router-dom';

const Home = ({page}) => {
  const [navWidth, setNavWidth] = useState('5%');
  const navigate = useNavigate();
  console.log(Cookies.get('access_token_cookie'))
  useEffect(() => {
    if (!Cookies.get('access_token_cookie')) {
      console.log("navigate")
      //navigate("/login");
    }
  }, [navigate]);

  let pageToRender = null
  switch(page){
    case 'tables':
      pageToRender = <TablesPage navWidth={ navWidth }/>
      break;
    /*case 'players':
      pageToRender = <PlayersPage navWidth={ navWidth }/>
      break;*/
    case 'settings':
      pageToRender = <SettingsPage navWidth={ navWidth }/>
      break;
    case 'logs':
      pageToRender = <LogsPage navWidth={ navWidth }/>
      break;
    default:
      pageToRender = <WelcomePage navWidth={ navWidth }/>
      break;
    
  }
  
  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
        <Navbar selected={ page } navWidth={ navWidth } setNavWidth={ setNavWidth }></Navbar>
        { pageToRender }
    </div>
  );
};

export default Home;