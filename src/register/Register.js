import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='register_page'>
        <div className='sub-register'>
          <i className="fa-solid fa-x" onClick={() => navigate('/')}></i>
          <div className='title'>
            <p onClick={() => navigate('/login')} className='register '>Login</p>
            <p onClick={() => navigate('/register')} className='register'>Register</p>
          </div>
          <div className='register_info'>
            <p>Enter your email and password to register.</p>
          </div>
          <div className='register_inputs'>
            <input className='username' type='text' placeholder='Username'/>
            <input className='email' type='email' placeholder='Enter your email address' required/>
            <input className='password' type='password' placeholder='Password' required/>
            <input className='password' type='password' placeholder='Confirm Password' required/>
          </div>
          <input type="submit" value='Register' className='register-btn'/>

          <div className='register-with'>
            <div className='straight_line'></div>
            <p>Or register with</p>
            <div className='straight_line'></div>
          </div>
          <div className='google-facebook'>
            <div className='google'>
              <img src='../../assets/google-logo.png'/> 
              <p>Continue with Google</p>
            </div>
            <div className='facebook'>
              <img src='../../assets/facebook-logo.png'/>
              <p>Continue with Facebook</p>
            </div>
          </div>
          <div className='green-line'></div>
        </div>
      </div>
    </div>
  );
};

export default Register;