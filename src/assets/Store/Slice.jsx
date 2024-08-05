import { createSlice } from '@reduxjs/toolkit'
const todoData=createSlice({
    name: 'todos',
  initialState: 0,
  reducers:{
    Tog:(state,action)=>{
         return state=action.payload;

    }
  }
  
 
})
export default todoData.reducer
export const {Tog}=todoData.actions