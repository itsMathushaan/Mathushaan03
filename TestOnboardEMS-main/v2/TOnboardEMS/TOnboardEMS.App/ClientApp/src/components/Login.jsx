import React from 'react';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { useRef, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../images/logo.png'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ResponsiveDrawer from './Sidebar';

const theme = createTheme();

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [checked, setChecked] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, SetErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        SetErrMsg('');
    }, [username, password])

    useEffect(() => {
        const usernameFromCookie = Cookies.get("username");
        const passwordFromCookie = Cookies.get("password");
        if (usernameFromCookie && passwordFromCookie) {
            setUsername(usernameFromCookie);
            setPassword(passwordFromCookie);
        }
    }, []);

    function handleRememberMe() {
        if (checked) {
            Cookies.set("username", username, { expires: 7 });
            Cookies.set("password", password, { expires: 7 });
        } else {
            Cookies.remove("username");
            Cookies.remove("password");
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            SetErrMsg("Username and password cannot be empty");
            return;
        }
        if (password.length < 8) {
            SetErrMsg("Password must be at least 8 characters long");
            return;
        }
        handleRememberMe();
        setUsername('');
        setPassword('');
        setSuccess(true);

        //modify
       /* try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            const data = await response.json();
            if (data.success) {
                setSuccess(true);
            } else {
                SetErrMsg(data.message);
            }
        } catch (error) {
            SetErrMsg('There was an error while logging in. Please try again.');
        }*/
        //end modify   
    }
  
    return (
        <>
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
                                   
                                        fullWidth
                                        ref={userRef}
                                            autoComplete="off"
                                            
                                       
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
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
                              
                                        fullWidth
                                        ref={userRef}
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"

                                    />
                                    <Grid container spacing={3} columns={16}>
                                        <Grid item xs={10} >
                                                <FormControlLabel
                                                    onClick={()=>setChecked(!checked)}  
                                                control={<Checkbox value="remember" color="primary" />}
                                                label="Remember me"

                                            />
                                        </Grid>
                                        <Grid item xs={6} mt={1.2}>

                                                <Link variant="body2" underline="hover" fontSize={15} color="inherit" component={Link} to={'/ForgetPassword'}>
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


export default Login;