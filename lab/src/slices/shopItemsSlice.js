import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    error:null
};

const shopItemsSlice = createSlice({
    name: 'shopItems',
    initialState,
    reducers: {
        addShopItem: (state, action) => {
            state.items.push(action.payload);
        },
        updateShopItem: (state, action) => {
            const {id,updatedItem} = action.payload;
            const index = state.items.findIndex((item) => item.id === id);
            if (index >= 0) {
                state.items[index] = { ...state.items[index], ...updatedItem };
                state.error=null
                console.log(state.items[index])
            }
            else{
                state.error="gjbhkls;"
            }
        },
        deleteShopItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { addShopItem, updateShopItem, deleteShopItem } = shopItemsSlice.actions;

export default shopItemsSlice.reducer;