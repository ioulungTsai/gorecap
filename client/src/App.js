import React, { useEffect } from 'react';
import './App.css';
import Card  from './components/Card';
import Cards from './components/Cards';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from 'react-router-dom';
import {
  Grid,
  Link,
  Container,
} from '@material-ui/core';


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
    <Container maxWidth='sm' style={{paddingTop: '100px'}}>
      <Router>
        <nav>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Link component={RouterLink} to="/Card" style={{margin: 10}}>Card</Link>
            <Link component={RouterLink} to="/Cards" style={{margin: 10}}>Cards</Link>
          </Grid>
        </nav>
        <Switch>
          <Route path='/Card'>
            <Card></Card>
          </Route>
          <Route path='/Cards'>
            <Cards></Cards>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
