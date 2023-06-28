import { createSlice } from "@reduxjs/toolkit";




const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  
  reducers: {
    addItem: (state, action) => {
      console.log("add item ==>",action.payload)
      // const item = state.items.find((food) => food.name === action.payload.name);

      // if (item) {
      //   item.quantity += action.payload.quantity;
      // } else {
      //   state.items.push(action.payload);
      // }
      state.items.push(action.payload);

    },
    removeItem: (state, action) => {
      // console.log("state>>>",typeof state)
    
      // console.log("remove item ==>",action.payload.id)

      // const itemRemoved = action.payload.id

      // const updatedItems = state.items.filter(item => item.id === itemRemoved);
      // const updatedItems = state.items.filter(item => console.log("updated items------>",item));
      //  state.items.splice((state.items.findIndex(b => b.id == itemRemoved)),1);
      // console.log("updateitems",updatedItems);
      // state.items = updatedItems;
      const itemIdToRemove = action.payload.id;
      state.items = state.items.filter(item => item.card.info.id !== itemIdToRemove);
      console.log("state.items------>",state.items)
    },
    clearCart: (state) => {
      state.items = [];
    },   
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
