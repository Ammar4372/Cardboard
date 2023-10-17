import { createSlice } from '@reduxjs/toolkit';

const deletCanvasObj = createSlice({
    name: 'deletCanvasObj',
    initialState: false,
    reducers:{
        setDeletCanvasObj(state, action){
            return state = action.payload;
        }
    },
});

export default deletCanvasObj.reducer ;

export const {setDeletCanvasObj} = deletCanvasObj.actions;