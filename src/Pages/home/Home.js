import { useEffect, useState } from 'react';
import Slider from "react-slick";
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Range } from 'react-range';
import { fetchData, fetchPost } from '../../features/ReducerSlice'
import Loader from '../../Loader/Loader';
import PostListing from '../../PlantsvsPosts/PostListings/PostListing';
import PlantsListings from '../../PlantsvsPosts/PlantsListings/PlantsListings';
import './Home.css';


const Home = ({value}) => {
  const { isLoading, plants, posts } = useSelector((state) => state.plants);
  const [values, setValues] = useState([25, 75])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
    dispatch(fetchPost())
  }, [dispatch])
  const handleRangeChange = (values) => {
    setValues(values)
  };

  const [category, setCategory] = useState('all')
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }
  console.log(category)

  const FilteredItems = () => {
    if(category === 'all'){
      
      return plants
    } else{

      const filteredData = plants.filter(item => item.category === category)
      return filteredData
    }
  }



  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };     
  return (
    <div className='home'>
      <div className='home-banner'>
        <div className='slider'>
          <div className='banner-info'>
            <h4>Welcome to GreenShop</h4>
            <h1>Let’s Make a Better <span>Planet</span></h1>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
            <h5>We are an online plant shop offering a wide range </h5>
            <button>SHOP NOW <i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <Slider {...settings} className="custom-slider">
            <div className='banner-img'>
              <img src='../../assets/home-img1.png'/>
            </div>
            <div className='banner-img'>
              <img src='../../assets/home-img2.png'/>
            </div>
            <div className='banner-img'>
              <img src='../../assets/home-img111.png'/>
            </div>
          </Slider>
        </div>
      </div>
      <div className='home-products'>
        <div className='products-filter'>
          <div className='categories'>
            <h3>Categories</h3>
            <div className='categories-items'>
              <div className='categories-item'>
                <h4>House Plants</h4>
                <p>(33)</p>
              </div>
              <div className='categories-item'>
                <h4>Potter Plants</h4>
                <p>(12)</p>
              </div>
              <div className='categories-item'>
                <h4>Seeds</h4>
                <p>(65)</p>
              </div>
              <div className='categories-item'>
                <h4>Small Plants</h4>
                <p>(39)</p>
              </div>
              <div className='categories-item'>
                <h4>Big Plants</h4>
                <p>(23)</p>
              </div>
              <div className='categories-item'>
                <h4>Succulents</h4>
                <p>(17)</p>
              </div>
              <div className='categories-item'>
                <h4>Trerrariums</h4>
                <p>(19)</p>
              </div>
              <div className='categories-item'>
                <h4>Gardening</h4>
                <p>(13)</p>
              </div>
              <div className='categories-item'>
                <h4>Accessories</h4>
                <p>(18)</p>
              </div>
            </div>
          </div>
          <div className='price-range'>
            <h3>Price Range</h3>
            <div className="dual-range-slider">
              <Range
                step={1}
                min={0}
                max={100}
                values={values}
                onChange={handleRangeChange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="track"
                    style={{
                      background: `linear-gradient(to right, #007AFF ${values[0]}%, #007AFF ${values[1]}%, #ddd ${values[1]}%, #ddd 100%)`
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="thumb"
                  />
                )}
              />
              <div className="labels">
                <p>
                  <span>Price: </span>&nbsp;
                  <span>${values[0]}</span>&nbsp;-
                  &nbsp;<span>${values[1]}</span>
                </p>
              </div>
            </div>
            <button>Filter</button>
          </div>
          <div className='plants-size'>
            <h3>Size</h3>
            <div className='sizes'>
              <div className='size'>
                <h4>Small</h4>
                <p>(119)</p>
              </div>
              <div className='size'>
                <h4>Medium</h4>
                <p>(86)</p>
              </div>
              <div className='size'>
                <h4>Large</h4>
                <p>(78)</p>
              </div>
            </div>
          </div>
        </div>
        <div className='cards'>
          <div className='cards-filters'>
            <div className='cards-filter-items'>
              <label htmlFor='all' className={category === 'all' ? 'active' : ''}>All Plants</label>
              <input checked={category === 'all'} id='all' name='filter' type='radio' className='filter' value="all" onChange={handleCategoryChange} />
              <label htmlFor='new' className={category === 'new' ? 'active' : ''}>New arrivals</label>
              <input checked={category === 'new'} id='new' name='filter' type='radio' className='filter' value="new" onChange={handleCategoryChange} />
              <label htmlFor='sale' className={category === 'sale' ? 'active' : ''}>Sale</label>
              <input checked={category === 'sale'} id='sale' name='filter' type='radio' className='filter' value="sale" onChange={handleCategoryChange} />
            </div>
            <div className='cards-sorting'>
              <p>Short by:</p>
              <DropdownButton
                align="end"
                title="Default sorting"
                id="dropdown-menu-align-end"
              >
                <Dropdown.Item eventKey="1">Small plants</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          {isLoading ? <Loader/> : <PlantsListings plants={FilteredItems()}  category={category} value={value}/>}
        </div>
      </div>
      <div className='double-cards'>
        <div className='card1'>
          <div className='card-img'>
            <img src='../../assets/double-card2.png'/>
          </div>
          <div className='card-info'>
            <h1>summer cactus<br/> & succulents</h1>
            <p>We are an online plant shop offering a wide<br/> range of cheap and trendy plants</p>
            <div className='button'>
            <button>Find More <i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <div className='card2'>
          <div className='card-img'>
            <img src='../../assets/double-card12.png'/>
          </div>
          <div className='card-info'>
            <h1>styling trends<br/> & much more</h1>
            <p>We are an online plant shop offering a wide<br/> range of cheap and trendy plants</p>            
            <div className='button'>
              <button>Find More <i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div className='blog-posts'>
        <h1>Our Blog Posts</h1>
        <p id="posts-info">We are an online plant shop offering a wide range of cheap and trendy plants. </p>
        {isLoading ? <Loader/> : <PostListing posts={posts}/>}
      </div>
    </div>
  );
};

export default Home;