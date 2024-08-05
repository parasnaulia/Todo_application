import React from 'react'
import "./App.css"
import { useSelector } from 'react-redux'
import { IoMdAddCircle } from 'react-icons/io'
import MainTodo from './MainTodo'
import Friend from './Friend'
import Todo from './Todo'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'

const MainData = () => {
    const data= useSelector((state)=>{
        return state.todos
       })
      const navigate= useNavigate()
       const data1=useSelector((state)=>{
        return state.todoIndex
       })
  return (
   <>

   
   <Todo/>
      {
        data===0? <MainTodo/>: <Friend/>
      }
      <div className='btnContainer'>
     {data===0?<IoMdAddCircle onClick={()=>{
        navigate("popup")
     }} style={{fontSize:"5rem", cursor:"pointer"}}/>:""}

      </div>
   </>
  )
}

export default MainData
