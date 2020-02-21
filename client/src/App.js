import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {user: []}
  // useEffect(() => {
  //   fetch('/test')
  //   .then(result => {
  //     return result.json()
  //   })
  //   .then(myjson => {
  //     console.log(myjson)
  //   })
  // })
  // useEffect(() => {
  //   fetch('/test', {
  //     method: 'POST', // or 'PUT'
  //     // mode: 'no cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     // body: JSON.stringify({ result: 'POST test OK!' }),
  //   })
  //   .then(console.log)
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   })
  // })
  componentDidMount() {
    fetch('http://localhost:3001/post/test', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ result: 'POST test OK!'})
    })
    .then(console.log)
    .catch(err => {
      console.log('Error:', err);
    })
  }

  render(){
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
}

export default App;
