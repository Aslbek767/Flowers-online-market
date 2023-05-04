import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  plants: [],
  posts: [],
  isLoading: false,
  currentPage: 1,
  categoryFilter: '', 
}



export const plants = createSlice({
  name: 'plants',
  initialState,
  reducers: {
    plantsFetching: (state) => {
      state.isLoading = true
    },
    plantsFetched: (state, action) => {
      state.isLoading = false
      state.plants = action.payload
    },
    plantsFetchingError: (state) => {
      state.isLoading = false
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    postFetching: (state) => {
      state.isLoading = true
    },
    postFetched: (state, action) => {
      state.isLoading= false
      state.posts = action.payload
    },
  },
})

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    filterByCategory: (state, action) => {
      const { category } = action.payload;
      return state.filter(item => item.category === category);
    },
  },
});


export const fetchData = () => async dispatch => {
  dispatch(plantsFetching());
  try {
    const response = await fetch('http://localhost:3000/plants');
    const data = await response.json();
    dispatch(plantsFetched(data));
  } catch{
    dispatch(plantsFetchingError());
  }
};



export const fetchPost = () => async dispatch => {
  dispatch(postFetching());
  try{
    const res = await fetch("http://localhost:3000/posts")
    const data = await res.json();
    dispatch(postFetched(data));
  } catch{
    dispatch(plantsFetchingError())
  }
} 

export const { setCategoryFilter,plantsFetching, plantsFetched, plantsFetchingError, setCurrentPage, postFetched, postFetching, filterByCategory } = plants.actions;
export default plants.reducer;