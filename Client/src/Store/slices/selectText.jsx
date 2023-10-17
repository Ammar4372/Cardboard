import { createSlice } from '@reduxjs/toolkit';

const selectText = createSlice({
    name: 'textToAdd',
    initialState: '',
    reducers:{
        setSelectText(state, action){
            return state = action.payload;
        }
    },
});

export default selectText.reducer ;

export const {setSelectText} = selectText.actions;