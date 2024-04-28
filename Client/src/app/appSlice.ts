import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    noti : ''
}

export const appSlice = createSlice({
    name:"app",
    initialState,
    reducers:{
        setNoti : (state,action)=>{
            console.log(state.noti);
            state.noti = action.payload;
            console.log(state.noti);
        },
    }
})

export const {setNoti} = appSlice.actions;
export default appSlice.reducer;