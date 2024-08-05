import React from 'react'
import { FaBell } from "react-icons/fa";
import Nav from './Nav';
import styles from "./MyFriend.module.css"

const MyFriend = () => {
  return (
    <>
   
    <div  className={styles.container}>
        <h5>
            Here is The Lsit of Friend request.if you accept the requesr ,user will able to create To-Do
            for You and you can also create To-Do for user
        </h5>
      
    </div>
    <div className={styles.bell}>
    <FaBell style={{fontSize:"5rem",marginTop:"5rem"}}/>

    </div>
    </>
  )
}

export default MyFriend
