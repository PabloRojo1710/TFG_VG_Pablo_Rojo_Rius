import React, { useState }from 'react';
import Cookies from 'js-cookie'
import Navbar from '../../components/Navbar';
import TablesPage from '../Tables/TablesPage';
import PlayersPage from '../Players/PlayersPage';
import SettingsPage from '../Settings/SettingsPage';

const Home = ({page}) => {
  const [navWidth, setNavWidth] = useState('5%');
  const userAccessToken = Cookies.get('access_token_cookie')
  console.log(Cookies)
  console.log(userAccessToken)
  
  /*if(!userAccessToken){
    navigate("/login")
  }*/
  
  let pageToRender = null
  switch(page){
    case 'tables':
      pageToRender = <TablesPage navWidth={ navWidth }/>
      break;
    case 'players':
      pageToRender = <PlayersPage navWidth={ navWidth }/>
      break;
    case 'settings':
      pageToRender = <SettingsPage navWidth={ navWidth }/>
      break;
    default:
      pageToRender = <TablesPage navWidth={ navWidth }/>
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