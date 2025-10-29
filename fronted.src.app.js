import React, {useEffect, useState} from 'react';

function App(){
  const [msg, setMsg] = useState('loading...');
  const backendBase = process.env.REACT_APP_BACKEND || 'http://localhost:3000';

  useEffect(() => {
    fetch(`${backendBase}/api/message`)
      .then(r => r.json())
      .then(j => setMsg(j.message + ' — ' + (j.instance || 'unknown')));
  }, [backendBase]);

  return (
    <div style={{textAlign:'center', marginTop:80}}>
      <h1>Full-Stack App on AWS</h1>
      <p>Backend message: {msg}</p>
      <p>Backend base URL: {backendBase}</p>
    </div>
  );
}

export default App;
