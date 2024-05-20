import React from 'react';
import ApiKeyZone from '../../components/settings/ApiKeyZone';
import DangerZone from '../../components/settings/DangerZone';
const SettingsPage = ({ navWidth }) => {
  console.log(navWidth)
    return (
      <div style={{ marginLeft: navWidth , padding: '64px', height: '100%', transition: 'all 1s ease', width: '100%'}}>
       <h1 style={{ width: 'fit-content'}}>Settings</h1>
       <section style={{display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center'}}>
        <ApiKeyZone />
       </section>
      </div>
    );
  };
  
  export default SettingsPage;