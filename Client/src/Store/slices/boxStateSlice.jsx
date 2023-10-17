import { createSlice } from '@reduxjs/toolkit';

const boxStateSlice = createSlice({
    name: 'canvas',
    initialState: false,
    reducers:{
        changeState(state, action){
            return state = action.payload;
        }
    },
});

export default boxStateSlice.reducer ;

export const {changeState} = boxStateSlice.actions;