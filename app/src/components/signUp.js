import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { Context } from '../api';

class SignUp extends React.Component {
  render() {
    const handleSubmit = event => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const jsondata = {
        username: data.get('username'),
        password: data.get('password'),
        title: data.get("title"),
        picture: data.get("picture"),
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        location: data.get('location'),
        role: data.get('role'),
      };

      const { redirect } = this.context

      this.context.register(jsondata)
      .then(function (response) {
        // handle success
        console.log(response);
        redirect("/user/dashboard")
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    };
  
    return (
      <Context.Consumer>
        {api => (
          <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                  <TextField
                    autoComplete="given-name"
                    name="title"
                    fullWidth
                    id="title"
                    label="Title"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="location"
                    label="Location"
                    name="location"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="picture"
                    label="Avatar"
                    name="picture"
                  />
                </Grid>
                <FormControl>
                  <FormLabel id="role"></FormLabel>
                  <RadioGroup
                  row
                      defaultValue="student"
                      name="role"
                  >
                      <FormControlLabel value="student" control={<Radio />} label="Student" />
                      <FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
                      <FormControlLabel value="expert" control={<Radio />} label="Expert" />
                  </RadioGroup>
                  </FormControl>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
            </Box>
          </Box>
        </Container>
        )}
      </Context.Consumer>
    );
  }
}

SignUp.contextType = Context

export default SignUp