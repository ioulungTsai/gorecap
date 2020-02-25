import React, { useEffect } from 'react';
import './App.css';
import  Card  from './components/Card';
import { Container } from '@material-ui/core';

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
    <Container maxWidth='sm'>
      <Card></Card>
    </Container>
  );
}

export default App;
