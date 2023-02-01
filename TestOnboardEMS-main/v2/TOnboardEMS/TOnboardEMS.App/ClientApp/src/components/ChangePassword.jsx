import React from 'react';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import axios from '../api/axios';
import logo from '../images/logo.png'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveDrawer from './Sidebar';
import ForgetPassword from './ForgetPassword';
import TLogin from './TLogin';
import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/joy/Link';


// const LOGIN_URL = '/auth';
const theme = createTheme();
const ChangePassword = () => {
    const [newPwd, setNewPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [success, setSuccess] = useState(false);
    const [sign, setSign] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setNewPwd('');
        setConfirmPwd('');
        setSuccess(true); 
    }

    const handleClick = async (e) => {
        e.preventDefault();
        setSign(true); 
    }

    return (
        <> 
            {sign ? (
                <section>
                    <TLogin/>
                </section>
            ):('')} 

            {success ? (
                <section>
                     <ThemeProvider theme={theme}>
                    <Grid container component="main" sx={{ height: '100vh' }}>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Grid item xs={12} sm={8} md={5} elevation={6} mt={12} square>
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >

                                <Typography component="h1" variant='h4'>
                                    Password Changed
                                </Typography>
                                <br />
                                <Typography variant='p' fontSize={14}>
                                Your password has been reset, please <br/>
                                click the below button to log in.
                                </Typography>
                                <br />
                                
                                <Button
                                    onClick={handleClick}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, borderRadius: '10px' }}
                                >
                                    Log In
                                </Button>
                                
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
                </section>
            ) : (
                <ThemeProvider theme={theme}>
                    <Grid container component="main" sx={{ height: '100vh' }}>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        
                        <Grid item xs={12} sm={8} md={5} elevation={6} mt={12} square>
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                                
                            >
                                <Typography component="h1" variant='h4' alignItems={"center"}>
                                    Change Password
                                </Typography>


                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                    <TextField
                                        sx={{ borderRadius: '10px' }}
                                        margin="normal"
                                        variant="filled"
                                        // required
                                        fullWidth
                                        autoComplete="off"
                                        onChange={(e) => setNewPwd(e.target.value)}
                                        value={newPwd}
                                        name="newPassword"
                                        label="New Password"
                                        type="password"
                                        id='newPassword'
                                        autoFocus
                                    />
                                    <TextField
                                        sx={{ borderRadius: '10px' }}
                                        margin="normal"
                                        variant="filled"
                                        // required
                                        fullWidth
                                        autoComplete="off"
                                        onChange={(e) => setConfirmPwd(e.target.value)}
                                        value={confirmPwd}
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        type="password"
                                        id='confirmPassword'
                                        autoFocus
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2, borderRadius: '10px' }}
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            )}
        </>

    )
}


export default ChangePassword;