import { useState } from 'react'
import Nav from './Nav'
import './App.css'
import Todo from './Todo'
import { Provider, useSelector } from 'react-redux'
import { store } from './assets/Store/Store'
import MainTodo from './MainTodo'
import Calendar from 'react-calendar'
import Friend from './Friend'
import { IoMdAddCircle } from "react-icons/io";
import Empty from './Empty'
import { Outlet } from 'react-router-dom'



function App() {

  return (
   
    <div className='Container'>
      <Nav/>
     
        
     <Outlet/>
     

      
   
   
    </div>
     
 
   
 
  )
}

export default App
