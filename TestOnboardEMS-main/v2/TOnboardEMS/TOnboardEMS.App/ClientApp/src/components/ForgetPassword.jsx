import React from 'react';
import Login from './Login.jsx';
import { Link } from "react-router-dom";
import { useRef, useState, useEffect, useContext, useHistory } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';

const theme = createTheme();

const ForgetPassword = () => {
    const errRef = useRef();
    const [email, setEmail] = useState('');
    const [success,setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');    
    /*const history = useHistory();*/


    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email) {
            setErrMsg("The email cannot be empty");
            return;
        }

        else if (!emailRegEx.test(email)) {
            setErrMsg('Invalid email address');
            return;
        }

        setSuccess(true);
    }   

  /*  const handleBackToLogin = () => {
        // send password reset email here
        history.push('/Login');
    };*/

    return (
        <>
            {success ? (
               
                    <ThemeProvider theme={theme}>
                    <Grid container component="main" sx={{ height: '100vh' }}>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80)',
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
                                    Check Your Email
                                </Typography>
                                <br />
                                <Typography variant='p' fontSize={14}>
                                    The link has been sent to the inbox,
                                    please <br/> check your email to reset password.
                                </Typography>
                                <br />


                                <Box component="form"  noValidate sx={{ mt: 1 }}>
                                    <Button
                                        onClick={<Login/>}
                                        type="submit"
                                        fullWidth
                                        variant="text"
                                        sx={{borderRadius: '10px' }}
                                        startIcon={<ArrowBackIosIcon/>}
                                    >
                                        Back to Login
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
                
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
                                backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80)',
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
                                    Forgot Password ?
                                </Typography>
                                <br />
                                <Typography variant='p' fontSize={14}>
                                    Enter the email that is associated with your account.
                                </Typography>
                                <br />

                                    
                                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                        
                                        <TextField
                                        type="email"
                                        margin="normal"
                                        variant="filled"
                                        fullWidth
                                        sx={{ borderRadius: '10px' }}
                                        autoComplete="off"
                                        onChange={(e) => setEmail(e.target.value)}
                                        name="email"
                                        value={email}
                                        label="Email Address"
                                        id='email'
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
                                        <Typography component="p" color="red" ref={errRef} className={errMsg ? "errmsg" :
                                            "offscreen"} aria-live="assertive">{errMsg}
                                        </Typography>  
                                    </Box>  
                                    </Box>
                                   
                        </Grid>
                    </Grid>
                </ThemeProvider>
            )}
        </>

    )
}


export default ForgetPassword;