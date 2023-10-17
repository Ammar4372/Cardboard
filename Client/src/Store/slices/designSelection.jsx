import { createSlice } from '@reduxjs/toolkit';

const designSelection = createSlice({
    name: 'canvas',
    initialState: false,
    reducers:{
        selectDesign(state, action){
            return state = action.payload;
        }
    },
});

export default designSelection.reducer ;

export const {selectDesign} = designSelection.actions;