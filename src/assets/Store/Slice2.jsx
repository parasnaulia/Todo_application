import { createSlice } from '@reduxjs/toolkit'
const todoData1=createSlice({
    name: 'todos',
  initialState: [],
  reducers:{
    Add:(state,action)=>{
        state.push(action.payload)

    },
    Del:(state,action)=>{
      return state.filter((item, index) => index !== action.payload);
      
    }
  }
  
 
})
export default todoData1.reducer
export const {Add,Del}=todoData1.actions;