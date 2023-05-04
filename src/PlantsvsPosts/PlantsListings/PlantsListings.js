import React from 'react';
import PlantsCards from '../PlantsCards/PlantsCards';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from '@mui/material';
import { setCurrentPage } from '../../features/ReducerSlice';
import './PlantsListings.css';  

const PlantsListings = ({ plants, value }) => {
  const dispatch = useDispatch()
  const perPage = 9
  const { currentPage } = useSelector((state) => state.plants);
  const handlePageChange = (event, page) => {
    dispatch(setCurrentPage(page));
  };
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentData = plants.filter(item => (value ? item.title.toLowerCase().includes(value) : item)).slice(startIndex, endIndex);
  const totalPages = Math.ceil(plants.length / 9)
  return (
    <div className='plants-pagination'>
      <div className='plantsListings'>
        {currentData.map((item) => (
          <PlantsCards {...item} key={item.id} value={value} product={item}/>
        ))}
      </div>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default PlantsListings;