import React from 'react';
import './ShoppingCart.css';
import { useNavigate } from 'react-router-dom';
import { decreaseCartQuantity } from '../../features/CartSlice';
import { useDispatch } from 'react-redux';


const ShoppingCartListing = ({cartItems}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => {
    navigate('/');
  };

  const handleDecreaseCart = (item) => {
    dispatch(decreaseCartQuantity(item))
  }
  return (
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
              <td className='item-price'>{item.price}</td>
              {/* <td id='cart-quantity'>
                <span onClick={() => handleDecreaseCart(item)}>−  -</span>
                <h1>{item.cartQuantity}</h1>
                <span>+</span>
              </td> */}
              <td id='total'>
                <p>$1414</p>
                <i className="fa-solid fa-trash"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
            <h2>1919</h2>
          </div>
          <div id='total-price'>
            <p>Coupon Discount</p>
            <h4>(-)000</h4>
          </div>  
          <div id='total-price'>
            <p>Shiping</p>
            <h2>$16.00</h2>
          </div>
          <div id='calc-price'>
            <p>Total</p>
            <h2>$2933</h2>
          </div>
          <button className='checkout'>Proceed To Checkout</button>
          <p className='continue-shopping' onClick={handleClick}>Continue Shopping</p>
        </div>
      </div>
      
    </div>
  );
};

export default ShoppingCartListing;