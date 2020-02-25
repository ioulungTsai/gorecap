import React, { useEffect, useState } from 'react';
import {
  Paper,
  // Grid,
  TextField,
  Button,
  CircularProgress,
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
    // console.log(data);
    fetch('/test', {
      method: 'POST', // or 'PUT'
      // mode: 'no cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [])
  return (
    <Paper elevation={1} style={{padding: '16px', margin: '8px'}}>
    {/* //   <Grid container> */}
    {/* //     <Grid item xs={12} align="center"> */}
          <form noValidate>
            <div>
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
              />
            </div>
            <div>
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
              />
            </div>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              onClick={submit}
              disabled={isLoading}
            >
              {isLoading && <CircularProgress size={15}/>}
              {!isLoading && 'Submit'}
            </Button>
          </form>
    {/* //     </Grid> */}
    {/* //   </Grid> */}
    </Paper>
  )
};
