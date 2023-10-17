import { createSlice } from '@reduxjs/toolkit';

const materialSlice = createSlice({
    name: 'material',
    initialState: '',
    reducers:{
        changeMaterial(state, action){
            return state = action.payload;
        }
    },
});

export default materialSlice.reducer ;

export const {changeMaterial} = materialSlice.actions;