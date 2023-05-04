import {useState} from 'react';
import './PlantsCards.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/CartSlice';



const PlantsCards = ({id, img, title, price, discount, product, value}) => {
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false)
  const HandleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div className='card' key={id} id={id}>
      <div className='straight-line'></div>
      <div className='card_image'>
        <i className={"fa-regular fa-heart res-like " + (toggle ? "like" :"")} onClick={() => setToggle(prev => !prev)}></i>
        <img src={img} alt={title}/>
        <div className='card_icons'>
          <i className="fa-solid fa-cart-shopping" onClick={() => HandleAddToCart(product)}></i>
          <i className={"fa-regular fa-heart" + (toggle ? " like" : "")} onClick={() => setToggle(prev => !prev)}></i>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className='card-info'>
        <p>{title}</p>
        <div className='card-price'>
          <h5>${price}</h5>
          <p>{discount}</p>
        </div>
      </div>
    </div>
  );
};

export default PlantsCards;