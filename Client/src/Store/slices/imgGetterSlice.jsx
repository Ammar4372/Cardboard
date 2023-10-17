import { createSlice } from '@reduxjs/toolkit';

const imgGetterSlice = createSlice({
    name: 'sideSelector',
    initialState: null,
    reducers:{
        getImage(state, action){
            return state = action.payload;
        }
    },
});

export default imgGetterSlice.reducer ;

export const {getImage} = imgGetterSlice.actions;