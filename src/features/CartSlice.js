import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  shippingCost: 13,
  productView: []
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity = 1;
        state.cartItems[itemIndex].cartItemTotal += state.cartItems[itemIndex].price * state.cartItems[itemIndex].cartQuantity;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1, cartItemTotal: action.payload.price };
        state.cartItems.push(tempProduct);
      }
      state.cartTotalAmount = state.cartItems.reduce((total, item) => total + item.cartItemTotal, 0);
    },
    decreaseCartQuantity(state, action){
      // const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      // let subTotal = state.cartItems[itemIndex].cartItemTotal;
      // if(state.cartItems[itemIndex].cartQuantity > 1){
      //   state.cartItems[itemIndex].cartQuantity -=1
      //   subTotal -= state.cartItems[itemIndex].price
      // }
      // else if(state.cartItems[itemIndex].cartQuantity < 1){
      //   const NextCartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
      //   console.log(NextCartItems)
      //   state.cartItems = NextCartItems;
      //   subTotal = 0
      // }
      // state.cartItems[itemIndex].cartItemTotal = subTotal
      // state.cartTotalAmount = state.cartItems.reduce((total, item) => total - item.cartItemTotal, 0);

      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
          state.cartItems[itemIndex].cartItemTotal = state.cartItems[itemIndex].price * state.cartItems[itemIndex].cartQuantity;
        } else {
          state.cartItems.splice(itemIndex, 1);
        }
        state.cartTotalAmount = -state.cartItems.reduce((total, item) => (total - item.cartItemTotal), 0);
      }
    },
    increaseCartQuantity(state, action){
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      let subTotal = 0
      if(state.cartItems[itemIndex].cartQuantity >= 1){
        state.cartItems[itemIndex].cartQuantity += 1
      } 
      if(state.cartItems[itemIndex].cartQuantity > 1){
        subTotal += state.cartItems[itemIndex].price * state.cartItems[itemIndex].cartQuantity 
      }
      state.cartItems[itemIndex].cartItemTotal = subTotal
      const total = state.cartItems.reduce((acc, item) => acc + item.cartItemTotal, 0)
      state.cartTotalAmount = total
    }, 
    removeCart(state,action) {
      const NewCartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
      state.cartItems = NewCartItems
    },
    calculate(state, action) {
      const total = state.cartItems.reduce((acc, item) => acc + item.cartItemTotal, 0)
      state.cartTotalAmount = total
    }
  }
})

export const {addToCart,productView, decreaseCartQuantity, increaseCartQuantity, removeCart } = cartSlice.actions
export default cartSlice.reducer