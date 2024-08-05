import React from 'react'
import styles from "./Nav.module.css"
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className={styles.Container}>
       <div className={styles.inner}><Link className={styles.aa} to="/">Home</Link></div>
       <div className={styles.inner}><Link className={styles.aa}  to="profile">Profile</Link></div>
       <div className={styles.inner}><Link className={styles.aa} to="myFriends">My Friend</Link></div>
       <div className={styles.inner}><Link className={styles.aa} to="calender">Calender Setting</Link></div>
       <div className={styles.inner}><Link className={styles.aa} to="/">Logout</Link></div>
      

      
    </div>
  )
}

export default Nav
