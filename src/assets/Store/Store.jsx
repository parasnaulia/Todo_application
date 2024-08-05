import { configureStore } from '@reduxjs/toolkit'
import todoData from "./Slice.jsx"

import todoData1 from "./Slice2.jsx"
import  todoData2 from "./Slice3.jsx"
export const store = configureStore({
    reducer: {
      todos:todoData ,
      todosArr:todoData1,
      todoIndex: todoData2
     
    },
  })