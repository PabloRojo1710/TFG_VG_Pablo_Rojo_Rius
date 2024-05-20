import React from 'react';

function NavItem({ key, data, title}) {
  // GET ALL PUNTUATION, GET ONE PUNTUTATION, INSERT PUNTUATION, DELETE PUNTUTATION
  // created_at -> epoch
  let message = ''
  let name_parts = data.user_name.split(" ")
  const initials = (name_parts[0][0] + name_parts[1][0]).toUpperCase();
  switch(data.action){
    case 'GET ALL PUNTUATION':
        message = 'consulted all the puntutations.'
        break;
    case 'GET ONE PUNTUATION':
        message = 'consulted one puntutation.'
        break;
    case 'INSERT PUNTUATION':
        message = 'inserted one puntuation.'
        break;
    case 'DELETE PUNTUATION':
        message = 'deleted one puntuation.'
        break;
  }    
  let date = new Date(data.created_at * 1000); // Convert seconds to milliseconds

    // Format the date and time in a readable format
    // e.g., "Wed May 10 2023 14:57:00 GMT+0200 (Central European Summer Time)"
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // getMonth() returns 0 for January, 11 for December
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Format the date as YYYY-MM-DD
    
  let str_date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    console.log('KEY', key)
    console.log('DATA', data)
    console.log('TITLE', title)
  return (
    <article className="log-item-container">
        <section className="log-item-initials-div">
            <h3 style={{ margin: 0, color: '#9db2f7'}}>{initials}</h3>
        </section>
        <h4>{data.user_name} has {message}</h4>
        <h4>{str_date}</h4>
    </article>

  );
}

export default NavItem;