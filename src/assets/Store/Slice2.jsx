import { createSlice } from '@reduxjs/toolkit'
const todoData1=createSlice({
    name: 'todos',
  initialState: [],
  reducers:{
    Add:(state,action)=>{
        state.push(action.payload)

    }
  }
  
 
})
export default todoData1.reducer
export const {Add}=todoData1.actions