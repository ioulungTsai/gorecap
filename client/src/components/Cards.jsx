import React from 'react';
import {
  Grid,
  Paper,
  //Button,
  //TextField,
  //CircularProgress,
  Typography
} from '@material-ui/core';
export default () => {

  return (
    <Paper elevation={2}>
      <form noValidate style={{padding: '16px', margin: '8px'}}>
        <Grid container
              direction="column"
              justify="center"
              alignItems="center"
        >
          <Typography component="h1" variant="h5" color="primary">
            ~ Cards List ~
          </Typography>
        </Grid>
      </form>
    </Paper>
  )
};