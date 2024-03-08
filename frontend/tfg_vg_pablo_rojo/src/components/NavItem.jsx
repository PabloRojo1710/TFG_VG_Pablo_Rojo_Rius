import React from 'react';

function NavItem({ navWidth, name, path, icon}) {
  // Render navigation items here
  let text = null
    if(navWidth === '5%') text = ''
    else text = <span>{ name }</span>
  return (
    <a href={ path } style={{ textDecoration: 'none', color: 'inherit', width: '100%'}}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', width: '100%' }}>
            { icon }
            { text }
        </div>
    </a>

  );
}

export default NavItem;