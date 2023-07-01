import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      console.log("add item ==>", action.payload);
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload.id;
      state.items = state.items.filter(
        (item) => item.card.info.id !== itemIdToRemove
      );
      // console.log("state.items------>", state.items);
    },
    clearCart: (state) => {
      state.items = [];
    },
    increaseQuantity: (state, action) => {
      console.log("increseqty--->",state.items)
      const updated2Item = action.payload.id
      console.log("updated2itm-->",updated2Item)
      const existingItem = state.items.find(
        (part) => part.card.info.id === updated2Item
      );
    
      if (existingItem) {
        console.log(existingItem)
        existingItem.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addItem, removeItem, clearCart, increaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
