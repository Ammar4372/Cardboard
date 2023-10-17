import { createSlice } from '@reduxjs/toolkit';

const selectObjType = createSlice({
    name: 'objType',
    initialState: '',
    reducers:{
        setSelectedObjType(state, action){
            return state = action.payload;
        }
    },
});

export default selectObjType.reducer ;

export const {setSelectedObjType} = selectObjType.actions;