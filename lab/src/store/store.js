import { configureStore } from '@reduxjs/toolkit';
import shopItemsReducer from '../slices/shopItemsSlice'; // Import your reducers
import reviewItemsReducer from '../slices/reviewSlice'

export const store = configureStore({
    reducer: {
        shopItems: shopItemsReducer, 
        reviewItems: reviewItemsReducer// Add other reducers as needed
    },
});