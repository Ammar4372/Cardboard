import { createSlice } from '@reduxjs/toolkit';

const sizeSlice = createSlice({
    name: 'size',
    initialState: {},
    reducers:{
        setSize(state, action){
            return state = action.payload;
        }
    },
});

export default sizeSlice.reducer ;

export const {setSize} = sizeSlice.actions;