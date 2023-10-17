import { createSlice } from '@reduxjs/toolkit';

const applyDesign = createSlice({
    name: 'applyDesign',
    initialState: false,
    reducers:{
        setApplyDesign(state, action){
            return state = action.payload;
        }
    },
});

export default applyDesign.reducer ;

export const {setApplyDesign} = applyDesign.actions;