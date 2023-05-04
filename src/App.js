import './App.css';
import {useState, useEffect} from 'react';
import Navbar from './navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/home/Home';
import Shop from './Pages/shop/Shop';
import PlantCare from './Pages/plantcare/PlantCare';
import Blog from './Pages/blog/Blog';
import Footer from './footer/Footer';
import Register from './register/Register';
import Login from './login/Login';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import ShoppingCart from './MainShop/ShoppingCart/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import Checkout from './Pages/checkout/Checkout';
import LikedItems from './Pages/LikedItems/LikedItems';


function App() {
  const dispatch = useDispatch()
  const [register, setRegister] = useState(false)
  console.log(register)
  const [toggle, setToggle] = useState(true)
  const [value, setValue] = useState()
  // console.log(value)
  const {cartItems} = useSelector(state => state.cart)
  return (
    <>
      <div className='main-component' >
        <Navbar setValue={setValue} value={value} toggle={toggle} setToggle={setToggle}/>
        <BreadCrumbs/>
        <div className='sub-container'>
          <Routes>
            <Route path='/' element={<Home value={value}/>}/>
            <Route path='/shop' element={<Shop cartItems={cartItems} toggle={toggle} setToggle={setToggle} />}/>
            <Route path='/plantcare' element={<PlantCare/>}/>
            <Route path='/blogs' element={<Blog/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/shop/checkout' element={<Checkout/>} />
            <Route path='/heart' element={<LikedItems/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
