import React, { useEffect } from 'react';
import './Shop.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCartQuantity, increaseCartQuantity, removeCart, calculateTotals } from '../../features/CartSlice';
import { Routes, Route } from 'react-router-dom';
import Checkout from '../checkout/Checkout';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Shop = ({cartItems, toggle}) => {
  const { cartTotalAmount, shippingCost} = useSelector(state => state.cart)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handlePreviousClick = () => {
    navigate('/');
  };
  const handleNextClick = () => {
    navigate('/home/checkout')
  }
  const handleDecreaseCart = (item) => {
    dispatch(decreaseCartQuantity(item))
  }
  const handleIncreaseCart = (item) => {
    dispatch(increaseCartQuantity(item))
  }
  const handleRemoveCart = (item) => {
    dispatch(removeCart(item))
  } 
  
  const { plants } = useSelector((state) => state.plants);
  const slicedElements = plants.slice(0,6)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };

  return (
    <>
    <Routes>
      <Route path='shop/checkout' element={<Checkout/>} />
    </Routes>
      {!cartItems.length ? <div className='nothingFound'>Nothing found in your cart</div> : 
        <div className='main-shop'>
          <div className='shopping-cart-list'>
            <table className='shopping'>
              <thead>
                <tr className='shopping-cart-header'>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr className='shopping-cart' key={item.id} id={item.id}>
                    <td className='img-title'>
                      <img src={item.img}/>
                      <div className='title-id'>
                        <h3>{item.title}</h3>
                        <p>SKU: 1995751877966</p>
                      </div>
                    </td>
                    <td className='item-price'>${item.price}</td>
                    <td id='cart-quantity'>
                      <span onClick={() => handleDecreaseCart(item)}>−</span>
                      <h1>{item.cartQuantity}</h1>
                      <span onClick={() => handleIncreaseCart(item)}>+</span>
                    </td>
                    <td id='total'>
                      <p>${item.cartItemTotal}</p>
                      <i className="fa-solid fa-trash" onClick={() => handleRemoveCart(item)}></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='res-shopping-shop-page'>
              {cartItems.map((item) => (
                <div className='res-shopping_cart' key={item.id}>
                  <div className='item-img-title-price'>
                    <img src={item.img}/>
                    <div className='item-img-title-price-info'>
                      <h3>{item.title}</h3>
                      <p>Size: M</p>
                      <span>${item.price}</span>
                    </div>
                  </div>
                  <div className='shopping-cart-cartQuantity'>
                    <span onClick={() => handleDecreaseCart(item)}>−</span>
                    <h1>{item.cartQuantity}</h1>
                    <span onClick={() => handleIncreaseCart(item)}>+</span>
                  </div>
                </div>
              ))}
            </div>
            <div className='shopping-price'>
              <h3>Cart Totals</h3>
              <div className='coupon-code'>
                <p className='coupon-code-title'>Coupon Apply</p>
                <div className='coupon-code-input'>
                  <input id='coupon-code' type='text' placeholder='Enter coupon code here...' />
                  <input id='coupon-code-submit' type='submit'/>
                </div>
              </div>
              <div className='shopping-price-calculate'>
                <div id='total-price'>
                  <p>Subtotal</p>
                  <h2>${cartTotalAmount}</h2>
                </div>
                <div id='total-price'>
                  <p>Coupon Discount</p>
                  <h4>(-)000</h4>
                </div>  
                <div id='total-price'>
                  <p>Shiping</p>
                  <h2>${shippingCost}</h2>
                </div>
                <div id='calc-price'>
                  <p>Total</p>
                  <h2>${cartTotalAmount + shippingCost}</h2>
                </div>
                <NavLink to='/shop/checkout' className='checkout' >Proceed To Checkout</NavLink>
                <p className='continue-shopping' onClick={handlePreviousClick}>Continue Shopping</p>
              </div>
            </div>
            <div className={'res_shopping-price ' + (!toggle ?"show_price" : "exit_price" )}>
              <div className='coupon-code-input'>
                <input id='coupon-code' type='text' placeholder='Enter coupon code here...' />
                <input id='coupon-code-submit' type='submit'/>
              </div>
              <div className='res_shopping-price-calculate'>
                <div id='total-price'>
                  <p>Subtotal</p>
                  <h2>${cartTotalAmount}</h2>
                </div>
                <div id='total-price'>
                  <p>Coupon Discount</p>
                  <h4>(-)000</h4>
                </div>  
                <div id='total-price'>
                  <p>Shiping</p>
                  <h2>${shippingCost}</h2>
                </div>
                <div id='calc-price'>
                  <p>Total</p>
                  <h2>${cartTotalAmount + shippingCost}</h2>
                </div>
                <NavLink to='/shop/checkout' className='checkout' >Proceed To Checkout</NavLink>
                {/* .<p className='continue-shopping' onClick={handlePreviousClick}>Continue Shopping</p> */}
              </div>
            </div>
          </div>
          <h2 className='carousel-info'>You may be interested in</h2>
          <div className='main-shop-carousel'>
            <Slider {...settings}>
              {slicedElements.map((item) => 
                <div className='carousel-card'>
                  <img src={item.img} />
                  <h2>{item.title}</h2>
                  <p>${item.price}</p>
                </div>
              )}
            </Slider>
          </div>
        </div>
      }
    </>
  );
};

export default Shop;