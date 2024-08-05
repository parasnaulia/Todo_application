import { createSlice } from '@reduxjs/toolkit'
const todoData2=createSlice({
    name: 'todos',
  initialState: 1,
  reducers:{
    Tog1:(state,action)=>{
         return state=action.payload;

    }
  }
  
 
})
export default todoData2.reducer
export const {Tog1}=todoData2.actions