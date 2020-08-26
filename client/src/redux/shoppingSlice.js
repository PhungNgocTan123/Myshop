import { createSlice } from '@reduxjs/toolkit';
import { v1 as uuid } from "uuid";
const initialShoppingList = {
    items: [],
    loading: false
}
const shoppingList = createSlice({
    name: "items",
    initialState: initialShoppingList,
    reducers: {
        getItems: (state, action) => {
            console.log(action.payload)
            state.items = action.payload;
        },
        addItem: (state, action) => {
            //  const newItem = action.payload;
            state.items.push(action.payload);
        },
        removeItems: (state, action) => {
            const removeItem = action.payload;
            const newState = state.items.filter(item => item._id !== removeItem);
            console.log(newState)
        },
        itemsLoading: (state, action) => {
            state.loading = true
        }
    }
})

const { reducer, actions } = shoppingList;
export const { addItem, removeItems, itemsLoading, getItems } = actions;
export default reducer;