import React from 'react'
import styles from "./TodoList.module.css"
import { useSelector } from 'react-redux'
import RenderTodo from './RenderTodo'

const TodoList = () => {
const dataArr=  useSelector((state)=>{
    return state.todosArr
  })
   const data= useSelector((state)=>{
        return state.todos
    })
    console.log(data)
  return (
    <div className={styles.Container}>
        <div className={styles.inner} ><h2>My Todo</h2></div>
        {
            dataArr.map((item)=>{
              return <RenderTodo todo={item}/>
            })
            
        }
       
        <div className={styles.inner} ><h2>Assigned</h2></div>
      
    </div>
  )
}

export default TodoList
