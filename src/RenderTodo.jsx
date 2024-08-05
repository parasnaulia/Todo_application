// import styles from "./RenderedTodo.css"

import React from 'react'

const RenderTodo = ({todo}) => {
    console.log("thisb ibs");
    console.log(todo)

  return (
    <div
    
    style={{
      padding: '15px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    }}
  >
    <h2 style={{ margin: '0 0 10px' }}>{todo.title}</h2>
    <p style={{ margin: '0 0 10px' }}>{todo.discription}</p>
    <p style={{ margin: '0', fontStyle: 'italic', color: 'gray' }}>Time: {todo.time}</p>
  </div>
  )
}

export default RenderTodo
