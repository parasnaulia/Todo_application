import React from 'react'
import styles from "./Profile.module.css"
import { IoIosContact } from "react-icons/io";

import Nav from './Nav';

const Profile = () => {
  return (
    <>
  
    <div className={styles.container}>
        <div className={styles.inner}>
            <div><IoIosContact style={{fontSize:"4rem",cursor:"pointer"}} /></div>
            <div><input className={styles.input1} placeholder='Name' value={"Paras"}/></div>
            <div><input className={styles.input1} placeholder='Email' value={"Parasnaulia5342gmail.com"}/></div>
            <div><input className={styles.input} placeholder='Contact' value={"99977272448"}/></div>
            <div><div>Member Since</div>
            <div><input className={styles.input} placeholder='date' value={"05-Aug-2024"}/></div>
            </div>
            <div><div>Status</div>
            <div><input className={styles.input} placeholder='date' value={"joined"}/></div>
            </div>

        </div>
      
      
    </div>
      <div className={styles.btn}>
      <button className={styles.innerBtn}>Update</button>
  </div>
 
  </>
  )
}

export default Profile
