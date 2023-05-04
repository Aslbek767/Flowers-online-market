import React from 'react';
import './Login.css';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate()
  const [exit, setExit] = useState(true)
  console.log(exit)
  return (
    <div>
        <div className='login_page'>
        <div className='sub-login'>
          <i className="fa-solid fa-x" onClick={() => {setExit(prev => !prev); navigate('/')}}></i>
          <div className='title'>
            <p onClick={() => navigate('/login')} className='login'>Login</p>
            <p onClick={() => navigate('/register')} className='login'>Register</p>
          </div>
          <div className='login_info'>
            <p>Enter your username and password to login.</p>
          </div>
          <div className='login_inputs'>
            <input className='email' type='email' placeholder='almamun_uxui@outlook.com' required/>
            <input className='password' type='password' placeholder='password' required/>
          </div>
          <span>Forgot Password?</span>
          <input type="submit" value='Login' className='login-input'/>

          <div className='login-with'>
            <div className='straight_line'></div>
            <p>Or login with</p>
            <div className='straight_line'></div>
          </div>
          <div className='google-facebook'>
            <div className='google'>
              <div>
                <img src='../../assets/google-logo.png'/>
              </div> 
              <div>
                <p>Login with Google</p>
              </div>
            </div>
            <div className='facebook'>
              <img src='../../assets/facebook-logo.png'/>
              <p>Login with Facebook</p>
            </div>
          </div>
          <div className='green-line'></div>
        </div>
      </div>
    </div>
  );
};

export default Login;