import { createSlice } from '@reduxjs/toolkit';

const canvasImage = createSlice({
    name: 'canvasImage',
    initialState: null,
    reducers:{
        setCanvasImage(state, action){
            return state = action.payload;
        }
    },
});

export default canvasImage.reducer ;

export const {setCanvasImage} = canvasImage.actions;