// import styles from "./RenderedTodo.css"

import React from 'react'
import { useDispatch } from 'react-redux';
import { Del } from './assets/Store/Slice2';

const RenderTodo = ({todo,index}) => {
  const currentDate = new Date();

// Get the day, month, and year
const day = String(currentDate.getDate()).padStart(2, '0');
const year = currentDate.getFullYear();

// Array of month names
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Get the current month name
const month = monthNames[currentDate.getMonth()];

// Format the date as "06-Aug-2024"
const formattedDate = `${day}-${month}-${year}`;
 const dispatch= useDispatch()
    console.log("thisb ibs");
    console.log(todo)

  return (
    <div 
    
    
    style={{
      padding: '15px',
      marginBottom: '10px',
      display:"flex",
      justifyContent:"space-between",
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    }}
  >
    <div>
    <h2 style={{ margin: '0 0 10px' }}>{todo.title}</h2>
    <p style={{ margin: '0 0 10px' }}>{todo.discription}</p>

    </div>
    <div>
    <p style={{ margin: '0', fontStyle: 'italic', color: 'gray' }}>Time: {todo.time}</p>
    <p>{formattedDate}</p>
    <div style={{marginTop:"1rem"}}><button onClick={()=>{
      // alert("Hello")
      dispatch(Del(index))
      
    }} style={{backgroundColor:"black",color:"white", padding:"0.4rem",cursor:"pointer"}}>Delelte Todo</button></div>
      

    </div>
   
    
  </div>
  )
}

export default RenderTodo
