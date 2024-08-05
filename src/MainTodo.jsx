import React from 'react'
import styles from "./MainTodo.module.css"

import TodoList from './TodoList'
import Empty from './Empty'
import { useSelector } from 'react-redux'
import Choices from './Choices'
import Calender1 from './Calender1'
const arrChoices=["Today","Week","Month","Calender"]

const MainTodo = () => {
    const dataArr= useSelector((state)=>{
        return state.todosArr;
    })
    const data1=useSelector((state)=>{
        return state.todoIndex
       })
       
  return (
    <>
    <div className={styles.container}>
        <div className={styles.inner}>
            {
                arrChoices.map((item,index)=>{
                    return <Choices data={item} index={index}/>
                })
            }
            

        </div>
      
       
      
    </div>

    {data1===3?<Calender1/>:""}
 
    <div>
        {dataArr.length==0?<Empty/>:<TodoList/>}
    </div>
    </>
  )
}

export default MainTodo
