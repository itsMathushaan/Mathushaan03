import React from 'react';
import { useRef, useState, useEffect } from 'react';
/*import AuthContext from "../context/AuthProvider";*/
// import axios from '../api/axios';
import logo from '../images/logo.png'
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveDrawer from './Sidebar';
import ForgetPassword from './ForgetPassword';
import { Link as RouterLink } from 'react-router-dom';


// const LOGIN_URL = '/auth';
const theme = createTheme();
const TLogin = () => {
    // const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, SetErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [forgot, setForgot] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        SetErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // try {
        // const response = await axios.post(LOGIN_URL,
        //     JSON.stringify({ user, pwd }),
        //     {
        //         headers: { 'Content-Type': 'application/json' },
        //         withCredentials: true
        //     }
        // );
        // console.log(JSON.stringify(response?.data));
        // const accessToken = response?.data?.accessToken; //node backend
        // const roles = response?.data?.roles; //node backend
        // setAuth({ user, pwd, roles, accessToken });
        setUser('');
        setPwd('');
        setSuccess(true); //remove later

        // }

        // catch (err) {
        //     if (!err.response) {
        //         SetErrMsg('No Server Response')
        //     } else if (err.response?.status === 400) {
        //         SetErrMsg('Missing Username or Password');
        //     } else if (err.response?.status === 401) {
        //         SetErrMsg('Unauthorized');
        //     } else {
        //         SetErrMsg('Login Failed')
        //     }
        //     errRef.current.focus();
        // }
    }
    const handleForgot = async (e) => {
        e.preventDefault();
        setForgot(true);
    }

    return (
        <> 
        
            {forgot ? (
                <section>
                    <ForgetPassword/>
                </section>
            ):('')} 

            {success ? (
                <section>
                    <ResponsiveDrawer />
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
                                backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
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

                                <img src={logo} />
                                <br />


                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                    <TextField
                                        sx={{ borderRadius: '10px' }}
                                        margin="normal"
                                        variant="filled"
                                        // required
                                        fullWidth
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setUser(e.target.value)}
                                        value={user}
                                        name="password"
                                        label="Username or Email"
                                        type="text"
                                        id='username'
                                        autoFocus
                                    />
                                    <TextField
                                        sx={{ borderRadius: '10px' }}
                                        margin="normal"
                                        variant="filled"
                                        // required
                                        fullWidth
                                        ref={userRef}
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"

                                    />
                                    <Grid container spacing={3} columns={16}>
                                        <Grid item xs={10} >
                                            <FormControlLabel
                                                control={<Checkbox value="remember" color="primary" />}
                                                label="Remember me"

                                            />
                                        </Grid>
                                        <Grid item xs={6} mt={1.2}>

                                            <Link variant="body2" underline="hover" fontSize={15} color="inherit" component={RouterLink} onClick={handleForgot}>
                                                Forgot password ?
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2, borderRadius: '10px' }}

                                    >
                                        Sign In
                                    </Button>
                                    <Grid item>

                                        <Typography component="p" color="red" ref={errRef} className={errMsg ? "errmsg" :
                                            "offscreen"} aria-live="assertive">{errMsg}
                                        </Typography>

                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            )}
        </>

    )
}


export default TLogin;