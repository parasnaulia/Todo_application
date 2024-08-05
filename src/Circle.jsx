import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import styles from './Circle.module.css';
import { IoMdContact } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";

const Circle = () => {
  const [value, setValue] = useState('');

  const handleClear = () => {
    setValue('');
  };

  return (
    <>
    <div className={styles.inputContainer}>
      <FaSearch className={styles.icon} />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.input}
        placeholder="Search..."
      />
      {value && <FaTimes className={styles.clearIcon} onClick={handleClear} />}
    </div>
    <div className={styles.bottom}>
    <IoMdContact  className={styles.iconD} />
   
    </div>
    <div className={styles.btn}><FaPlusCircle style={{fontSize:"3rem",cursor:"pointer"}} /></div>
    
  
    </>
  );
};

export default Circle;
