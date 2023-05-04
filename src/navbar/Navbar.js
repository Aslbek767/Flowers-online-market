import {useState, useRef} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Login from '../login/Login';
import Register from '../register/Register';
import { useSelector } from 'react-redux';



const Navbar = ({ value,setValue,toggle, setToggle }) => {
  const [searchStatus, setSearchStatus] = useState(false)
  // console.log(searchStatus)
  // const [toggle, setToggle] = useState(true)
  // console.log(toggle)
  const [register, setRegister] = useState(false)
  // console.log(register) 
  const navigate = useNavigate()
  const {cartItems} = useSelector((state) => state.cart)
  // console.log(cartItems.length)
  return (
    <div className='nav'>
      <div className='nav-logo'>
        <img src='.././assets/logo.png'/>
      </div>
      <div className={ "nav-links " + ( toggle ? "show_nav" : "exit-nav")}>
        <i className='fa-solid fa-xmark' onClick={() => setToggle(prev => !prev)}></i>
        <NavLink to='/' className='link'>Home</NavLink>
        <NavLink to='/shop' className='link'>Shop</NavLink>
        <NavLink to='/plantcare' className='link'>Plant Care</NavLink>
        <NavLink to='/blogs' className='link'>Blogs</NavLink>
      </div>
      <i className="fa-solid fa-bars" onClick={() => setToggle(prev => !prev)}></i>
      <div className='nav-account'>
        <div className='search-bar'>
          {!searchStatus ? "" : (<input type='text' id='fsearch' name='fsearch' onChange={(e) => setValue(e.target.value)} value={value}/>)}
          <label htmlFor='fsearch' className='search' onClick={() =>setSearchStatus(prev => !prev)}><i className="fa-solid fa-magnifying-glass"></i></label>
        </div>
        <div className='res-search-bar'>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Find your plants"/>
        </div>
        <NavLink to='/shop'>
        <div className='shopping-cart-container'>
          <img src='.././assets/shopping-card.png' className='shopping-cart' onClick={() => navigate("/shop")}/>
          <p>{cartItems.length}</p>
        </div>
        </NavLink>
        <button onClick={() => navigate('login')}>
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
          <span>Login</span>
        </button>
      </div>  
      <div className={'res-navbar-icons ' + (toggle ? "hide-icons" : "show-icons")}>
        <div className='house-heart'>
          <NavLink to='/'>
            <i className="fa-solid fa-house"></i>
          </NavLink>
          <NavLink to='/heart'>
            <i className="fa-solid fa-heart"></i>
          </NavLink>
        </div>
        <div className='nav-main-image'>
          <img src='../../assets/barcode-scanner.png'/>
        </div>
        <div className='cart-profile'>
          <NavLink to='/shop'>
            <i className="fa-solid fa-cart-shopping"></i>
            <p>{cartItems.length}</p>
          </NavLink>
          <NavLink to='/login'>
            <i className="fa-solid fa-user"></i>
          </NavLink>
        </div>
      </div>
      {register ? <Login/> : ""}
    </div>
  );
};

export default Navbar;