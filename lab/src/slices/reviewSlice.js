import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    reviews: [],
    error:null
};

const reviewSlice = createSlice({
    name: 'reviewItems',
    initialState,
    reducers: {
        addReview: (state, action) => {
            state.reviews.push(action.payload);
        },
        updateReview: (state, action) => {
            const {id,updatedItem} = action.payload;
            const index = state.reviews.findIndex((item) => item.id === id);
            if (index >= 0) {
                state.reviews[index] = { ...state.reviews[index], ...updatedItem };
                state.error=null
                console.log(state.reviews[index])
            }
            else{
                state.error="gjbhkls;"
            }
        },
        deleteReview: (state, action) => {            
            state.reviews = state.reviews.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { addReview, updateReview, deleteReview} = reviewSlice.actions;

export default reviewSlice.reducer;