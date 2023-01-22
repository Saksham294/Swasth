import React, { useState } from 'react'
import "./DoctorRegister.css"
import { Button, Grid, Link, Paper, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import { registerDoctor } from '../../../Actions/userActions'
import { Avatar } from '@mui/material'

function DoctorRegister() {
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#087cfc',
        contrastText: '#fff',
      },
    },
  });
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const loginHandler = (e) => {
    e.preventDefault()
    if (password === confirmPass) {
      dispatch(registerDoctor(name, email, password, avatar,phone))
    }
    else {
      console.log("Passwords don't match")
    }
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };

  const paperStyle = { padding: 20, height: '100%', width: 450, margin: "20px auto" }
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Typography variant='h2' sx={{ fontFamily: "Roboto" }} mt={2} mb={4} ml={16}>Sign Up</Typography>
        <Grid>
          <form onSubmit={loginHandler}>
            <Avatar
              src={avatar}
              alt="User"
              sx={{ height: "10vmax", width: "10vmax", marginLeft: "10rem" }}
            />
            <input className='imageInputs' type="file" accept="image/*" onChange={handleImageChange} />


            <input type="text" value={name} placeholder="Name"
              className='inputs'
              onChange={(e) => { setName(e.target.value) }}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className='inputs'
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
            <input
              type="password"
              placeholder="Password"
              required
              className='inputs'
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className='inputs'
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}

            />
            <input
              type="text"
              placeholder="Phone Number"
              required
              className='inputs'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}

            />
            <ThemeProvider theme={theme}><Button color='neutral' variant="contained" fullWidth type='submit'
              sx={{ marginTop: "20px" }}
            >Register</Button></ThemeProvider>
          </form>
        </Grid>
        <ThemeProvider theme={theme}>

          <Typography ml={14} mt={2}>Already have an account? <Link href='/login' color="#42a5f5" underline="hover">Sign In</Link></Typography>
        </ThemeProvider>
      </Paper>

    </Grid>
  )
}

export default DoctorRegister
