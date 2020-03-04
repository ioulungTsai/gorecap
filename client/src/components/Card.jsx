import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  Button,
  TextField,
  CircularProgress,
  Typography
} from '@material-ui/core';
export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');


  const submit = async () => {
    const data = {
      question,
      answer
    };
    if(
      data.answer.replace(/ /g, '') === '' ||
      data.question.replace(/ /g, '') === ''
    ) {
      return
    }
    setIsLoading(true)
    fetch('/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      return response.json()
    })
    .then(result => {
      console.log(result)
    })
    .then( () => {
      setQuestion('')
      setAnswer('')
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    .finally(()=> {
      setIsLoading(false)
    })
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])
  return (
    <Paper elevation={2}>
      <form noValidate style={{padding: '16px', margin: '8px'}}>
        <Grid container
              direction="column"
              justify="center"
              alignItems="center"
        >
          <Typography component="h1" variant="h5" color="primary">
            Let's Create a Card
          </Typography>
          <TextField
            id="outlined-question"
            label={`Question`}
            type="text"
            variant="outlined"
            style={{ margin: 8 }}
            disabled={isLoading}
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <TextField
            id="outlined-answer"
            label={`Answer`}
            type="text"
            variant="outlined"
            style={{ margin: 8 }}
            disabled={isLoading}
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
            multiline
            rows="10"
          />
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={submit}
            disabled={isLoading}
            fullWidth
          >
            {isLoading && <CircularProgress size={15}/>}
            {!isLoading && 'Submit'}
          </Button>
        </Grid>
      </form>
    </Paper>
  )
};
