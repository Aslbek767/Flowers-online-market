import React from 'react';
import './Footer.css'

const Footer = () => {
  
  return (
    <div className='footer'>
      <div className='footer-up'>
        <div className='cards'>
          <div className='card'>
            <div className='card-img'>
              <div className='img-bg'></div>
              <img src='.././assets/carden-care.png' alt='name'/>
            </div>
            <h3>Garden Care</h3>
            <p>
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
          </div>
          <div className='card'>
            <div className='card-img'>
              <div className='img-bg'></div>
              <img src='.././assets/plant-renovation.png' alt='name'/>
            </div>
            <h3>Plant Renovation</h3>
            <p>
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
          </div>
          <div className='card'>
            <div className='card-img'>
              <div className='img-bg'></div>
              <img src='.././assets/watering-carden.png' alt='name'/>
            </div>
            <h3>Watering Garden</h3>
            <p>
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
          </div>
        </div>
        <div className='email'>
          <h2>Would you like to join newsletters?</h2>
          <form className='email-input'>
            <input placeholder='enter your email address...' type='email' id='email' className='email-input' required/>
            <button type='submit' value='Send'>Join</button>
          </form>
          <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
        </div>
      </div>
      <div className='footer-middle'>
        <div className='logo'>
          <img src='.././assets/logo.png'/>
        </div>
        <div className='location'>
          <i className="fa-solid fa-location-dot"></i>
          <p>
            70 West Buckingham Ave.
            Farmingdale, NY 11735
          </p>
        </div>
        <div className='contact-email'>
          <i className="fa-solid fa-envelope"></i>
          <p>contact@greenshop.com</p>
        </div>
        <div className='contact-number'>
          <i className="fa-solid fa-phone-volume"></i>
          <p>+88 01911 717 490</p>
        </div>
      </div>
      <div className='footer-down'>
        <div className='account-links'>
          <h2>My Account</h2>
          <a href='#'>My Account</a>
          <a href='#'>Our Stories</a>
          <a href="#">Contact Us</a>
          <a href="#">Career</a>
          <a href='#'>Specials</a>
        </div>
        <div className='help-links'>
          <h2>Help & Guide</h2>
          <a href='#'>Help Center</a>
          <a href='#'>How to Buy</a>
          <a href="#">Shipping & Delivery</a>
          <a href='#'>Product Policy</a>
          <a href="#">How to Return</a>
        </div>
        <div className='categories-links'>
          <h2>Categories</h2>
          <a href='#'>House Plants</a>
          <a href='#'>Potter Plants</a>
          <a href='#'>Seeds</a>
          <a href='#'>Small Plants</a>
          <a href='#'>Accessories</a>
        </div>
        <div className='social-media-payment'>
          <div className='social-media'>
            <h2>Social Media</h2>
            <div className='social-links'>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
          <div className='payment'>
            <h2>We accept</h2>
            <img src='../../assets/payments.png'/>
          </div>
        </div>
      </div>
      <div className='rights'>
        <p>
          ©{new Date().getFullYear()} GreenShop. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;