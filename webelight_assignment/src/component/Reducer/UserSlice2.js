import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    cart: [],
  },
  reducers: {
    addnewItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    deleteItem2: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((i) => i.id !== id);
    },
    IncrementItem2: (state, action) => {
      const id = action.payload;
      const item = state.cart.find((i) => i.id === id);
      if (item) {
        // Increase the quantity of the item in the cart
        item.quantity += 1;
      }
    },
    decrementItem2: (state, action) => {
      const id = action.payload;
      const item = state.cart.find((i) => i.id === id);
      if (item && item.quantity > 0) { // Check if the quantity is greater than 0
        item.quantity -= 1;
      }
    },
  },
});

export const { addnewItem, deleteItem2, IncrementItem2, decrementItem2 } = userSlice.actions;
export default userSlice.reducer;
