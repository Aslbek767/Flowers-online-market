import { configureStore } from '@reduxjs/toolkit';
import plantsReducer from './ReducerSlice';
import cartSlice from './CartSlice';


const store = configureStore({
  reducer: {
    plants: plantsReducer,
    cart: cartSlice
  },
});

export default store;