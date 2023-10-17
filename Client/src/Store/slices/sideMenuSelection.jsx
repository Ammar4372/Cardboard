import { createSlice } from '@reduxjs/toolkit';

const sideMenuSelection = createSlice({
    name: 'sideMenuSelection',
    initialState: 'size',
    reducers:{
        setSideMenuSelection(state, action){
            return state = action.payload;
        }
    },
});

export default sideMenuSelection.reducer ;

export const {setSideMenuSelection} = sideMenuSelection.actions;