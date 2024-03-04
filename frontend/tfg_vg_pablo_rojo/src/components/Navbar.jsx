import React from 'react';

function Navbar() {
  // Render navigation items here
  return (
    <nav style={{width: '25%', height: '100%'}}>
      <a href="/tables">Tables</a>
      <a href="/">Home</a>
      <a href="/players">Players</a>
      <a href="/settings">Settings</a>
      
    </nav>
  );
}

export default Navbar;

