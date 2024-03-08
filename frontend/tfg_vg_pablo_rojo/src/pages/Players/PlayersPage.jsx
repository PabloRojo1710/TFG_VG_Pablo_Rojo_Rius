import React from 'react';

const PlayersPage = ({navWidth }) => {
  console.log(navWidth)
    return (
      <div style={{ marginLeft: navWidth , padding: '64px', height: '100%', transition: 'all 1s ease' }}>
       <h1 style={{backgroundColor: 'red'}}>PLAYERS PAGE</h1>
      </div>
    );
  };
  
  export default PlayersPage;