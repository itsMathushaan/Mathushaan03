import React from 'react'
import bgImg from '../assets/profileimage.jpg';
import logo from '../assets/logo.png';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../comp/Form.css';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section className='dark'>
        <div className="register d-flex">
            <div className="col-6">
                <div className='login-section mt-5'>
                    <div className='center-login'>
                        <img className='img-login' src={logo} alt=""/>
                        {/* <h2>Login</h2> */}<br></br>
                        <span>login to onboard</span>
                    </div>
                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <label>Username</label>
                        <input type="text" {...register("username")} placeholder='example@work.com' />
                        <label>Password</label>
                        <input type="password" {...register("password")} placeholder='**********' />
                        <a href=''>Forget Password?</a>                    
                        <button className='button-custom-login'>Sign In</button>
                    </form>
                </div>
            </div>
            <div className="col-6">
                <div className='img-login-page'>
                    <img src={bgImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}