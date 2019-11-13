import React,{useState} from 'react';
import logo from '../logo.svg';
function Profile() {
  const [count, setCount]=useState(0);
    

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{count}</p>
        <button onClick={()=>setCount(count +1)}>suma</button>
      </header>
    </div>
  );
}

export default Profile;
