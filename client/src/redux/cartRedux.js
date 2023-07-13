import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      // const list = state.cart.foreach(product => console.log(product));
      console.log(action.payload)
      let products = state.products
      for (let i in products) {
        if (products[i]._id === action.payload._id) {
          const stock = products[i].stock || 10
          if(products[i].quantity >= stock && action.payload.quantity === 1) {
            return;
          }
          if (products[i].quantity === 1 && action.payload.quantity === -1) {
            products = products.filter(product => product._id !== action.payload._id)
            state.products = products
            state.quantity = products.length
            console.log(state.total, action.payload.price * action.payload.quantity)
            state.total += action.payload.price * action.payload.quantity;
            return;
          }
          products[i].quantity += action.payload.quantity
          state.products = products
          state.quantity = products.length
          state.total += action.payload.price * action.payload.quantity;
          return;
        }
      };
      state.quantity += 1
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      if(state.total < 0) {
        state.total = 0;
      }
    
      console.log(state.products);
    },
    delCart: (state) => {
      state.quantity = 0;
      while (state.products.length > 0) {
        state.products.pop();
      }
      // state.products = []; 
      state.total = 0;
    },
    delCartProduct: (state, action) => {
      state.quantity -= 1;
      state.products = state.products.filter(product => product._id !== action.payload._id)
      state.total -= action.payload.price * action.payload.quantity;
      if(state.products.length === 0) {
        state.total = 0;
      }
      if(state.quantity < 0) {
        state.quantity = 0;
      }
      if(state.total < 0) {
        state.total = 0;
      }
    }
  },
});

export const { addProduct, delCart,delCartProduct } = cartSlice.actions;
export default cartSlice.reducer;
