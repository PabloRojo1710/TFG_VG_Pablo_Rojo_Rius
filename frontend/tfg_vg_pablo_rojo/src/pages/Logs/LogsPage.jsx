import React, { useEffect, useState } from 'react';
import LogItem from '../../components/LogItem';
import Cookies from 'js-cookie';

const LogsPage = ({ navWidth }) => {
  const [logsData, setLogsData] = useState({})
  useEffect(()=>{
    fetch("http://127.0.0.1:5000/control-panel/get-all-logs", {
      cache: 'no-store',
      credentials: 'include'
    }).then(
      res =>res.json()
    ).then(data =>{
      setLogsData(data.data)
      console.log(data.data)
    })
  }, [])
    return (
      <div style={{ marginLeft: navWidth, padding: '64px', height: '100%', transition: 'all 1s ease', width: '100%' }}>
       <h1 style={{ width: 'fit-content'}}>Logs Page</h1>
       <section style={{display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', width: '100%'}}>
       {Object.keys(logsData).map(key => (
        <LogItem key={key} data={logsData[key]} title={key} />
      ))}
       </section>
      </div>
    );
  };
  
  export default LogsPage;