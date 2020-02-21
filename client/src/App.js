import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // useEffect(() => {
  //   fetch('/test')
  //   .then(result => {
  //     return result.json()
  //   })
  //   .then(myjson => {
  //     console.log(myjson)
  //   })
  // })
  useEffect(() => {
    fetch('/test', {
      method: 'POST', // or 'PUT'
      // mode: 'no cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ result: 'POST test OK!' }),
    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  })

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
      </header>
    </div>
  );
}

export default App;
