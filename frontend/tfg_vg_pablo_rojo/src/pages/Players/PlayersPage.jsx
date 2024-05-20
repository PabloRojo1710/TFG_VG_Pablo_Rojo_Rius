import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Table from "../../components/players/Table";

const PlayersPage = ({navWidth }) => {
  const [playersData, setPlayersData] = useState({})
  useEffect(()=>{
  }, [])
    return (
      <div style={{ marginLeft: navWidth , padding: '64px', height: '100%', transition: 'all 1s ease', width: '100%'}}>
       <h1 style={{ width: 'fit-content'}}>Players Page</h1>
      </div>
    );
  };
  
  export default PlayersPage;