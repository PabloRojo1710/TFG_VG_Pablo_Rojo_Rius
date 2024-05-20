import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import NavItem from './NavItem';

function Navbar({ navWidth, setNavWidth}) {
  let display_icon = null
  if(navWidth === '5%') display_icon = <MenuOutlinedIcon fontSize="large" />
  else display_icon = <CloseOutlinedIcon fontSize="large" />
  const handleNavbar = () =>{
    if(navWidth === '5%')
      setNavWidth('15%')
    else
      setNavWidth('5%')
  }
  //<NavItem navWidth={ navWidth } name="Players" path="/players" icon={ <SupervisorAccountOutlinedIcon fontSize="large" />}/>
  return (
    <nav style={{width: navWidth, transition: 'width 1s ease', height: '100%', position: 'fixed', top: '0', left: '0', backgroundColor: 'grey', color: 'white', display: "flex", flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px'}}>
        <button onClick={ handleNavbar } style={{backgroundColor: 'inherit'}}>
          { display_icon}
        </button>
        <NavItem navWidth={ navWidth } name="Home" path="/" icon={ <HomeOutlinedIcon fontSize="large" />}/>
        <NavItem navWidth={ navWidth } name="Tables" path="/tables" icon={ <StorageOutlinedIcon fontSize="large" />}/>
        
        <NavItem navWidth={ navWidth } name="Logs" path="/logs" icon={ <FeedOutlinedIcon fontSize="large" />}/>
      </div>
      <NavItem navWidth={ navWidth } style={{width: "100%", paddingBottom: '12px'}} name="Settings" path="/settings" icon={ <SettingsOutlinedIcon fontSize="large" />}/>
    </nav>
  );
}

export default Navbar;

