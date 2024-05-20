import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Table from "../../components/players/Table";

const TablesPage = ({navWidth }) => {
  const [playersData, setPlayersData] = useState({})
  useEffect(()=>{
    fetch("http://127.0.0.1:5000/control-panel/get-all-data", {
      cache: 'no-store',
      headers:{
        Cookie: Cookies
      },
      credentials: 'include'
    }).then(
      res =>res.json()
    ).then(data =>{
      setPlayersData(data.data)
      console.log(data.data)
    })
  }, [])
    return (
      <div style={{ marginLeft: navWidth , padding: '64px', height: '100%', transition: 'all 1s ease', width: '100%'}}>
       <h1 style={{ width: 'fit-content'}}>Tables Page</h1>
       <section style={{display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center'}}>
       {Object.keys(playersData).map(key => (
        <Table key={key} data={playersData[key]} title={key} />
      ))}
       </section>
      </div>
    );
  };
  
  export default TablesPage;