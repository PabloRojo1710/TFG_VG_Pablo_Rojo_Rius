import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';

function ApiKeyZone() {
  const [api_key, setApiKey] = useState('')
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const toggleMostrarContenido = () => {
    setMostrarContenido(!mostrarContenido);
  };

  const regenerateApiKey = () => {
    console.log('CALLING REGENERATE')
    setApiKey('')
    fetch("http://127.0.0.1:5000/control-panel/generate-api-key", {
      cache: 'no-store',
      headers:{
        Cookie: Cookies
      },
      credentials: 'include',
      method: 'POST'
    }).then(
      res =>res.json()
    ).then(data =>{
     setApiKey(data.api_key) 
    })
  }
  useEffect(()=>{
    fetch("http://127.0.0.1:5000/control-panel/get-api-key", {
      cache: 'no-store',
      headers:{
        Cookie: Cookies
      },
      credentials: 'include'
    }).then(
      res =>res.json()
    ).then(data =>{
     setApiKey(data.api_key) 
    })
  })

  return (
    <article style={{minHeight: '150px', width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', border: '1px solid grey', borderRadius: '12px', padding: '12px', alignItems: 'flex-start'}}>
      <h2>Api Key Zone</h2>
      {
        api_key
        ? 
        <section style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start'}}>
            <span><strong>Api Key</strong></span>
            <span>This is the actual API key.</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px'}}>
              <input class="custom-input" type={mostrarContenido ? 'text' : 'password'} value ={api_key} readOnly style={{width: 'fit-content'}}/>
              <button className="custom-btn" onClick={toggleMostrarContenido}>
                {mostrarContenido ? 'Ocultar' : 'Mostrar'}
                </button>
            </div>
          </div>
          <button className="custom-btn" onClick={regenerateApiKey} style={{width: 'fit-content'}}>
            Regenerate Api key
          </button>
        </section>
        : 
        <section style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start'}}>
          <h4>Api Key</h4>
          <span>There is no api key generated</span>
        </div>
        <button className="custom-btn" onClick={regenerateApiKey} style={{width: 'fit-content'}}>
            Generate Api Key
        </button>
        </section>
      }
    </article>

  );
}

export default ApiKeyZone;