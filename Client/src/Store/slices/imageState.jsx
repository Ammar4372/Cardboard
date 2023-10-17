import { createSlice } from '@reduxjs/toolkit';

const imageState = createSlice({
    name: 'imageState',
    initialState: null,
    reducers:{
        setImageState(state, action){
            return state = action.payload;
        }
    },
});

export default imageState.reducer ;

export const {setImageState} = imageState.actions;