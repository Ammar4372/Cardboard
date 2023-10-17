import { createSlice } from '@reduxjs/toolkit';

const sideSelectorSlice = createSlice({
    name: 'sideSelector',
    initialState: '',
    reducers:{
        changeSide(state, action){
            return state = action.payload;
        }
    },
});

export default sideSelectorSlice.reducer ;

export const {changeSide} = sideSelectorSlice.actions;