import { createSlice } from '@reduxjs/toolkit';

const sideColor = createSlice({
    name: 'side_color',
    initialState: '#ffffff',
    reducers:{
        setSideColor(state, action){
            return state = action.payload;
        }
    },
});

export default sideColor.reducer ;

export const {setSideColor} = sideColor.actions;