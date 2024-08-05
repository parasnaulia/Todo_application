import React, { useState } from 'react';
import styles from "./Popup.module.css";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineNoteAlt } from "react-icons/md";
// import { FaPlus } from "react-icons/fa";
import { MdAccessAlarms } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { Add } from './assets/Store/Slice2';
import { useNavigate } from 'react-router-dom';
const Popup = () => {
  const [index, setIndex] = useState(1);
 const dispatch= useDispatch();
const navigate= useNavigate()
 

  const getTagStyle = (tagIndex) => ({
    backgroundColor: index === tagIndex ? "black" : "grey",
    color: index === tagIndex ? "white" : "black",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "5px",
  });
  const [title,setTitle]=useState("");
  const [discription,setDiscription]=useState("");
  const [time,setTime]=useState("");
  const [titleError,setTitleError]=useState(false);
  const [titleDisc,setTitleDisc]=useState(false);
const [timeError,setTimeError]=useState(false);

  return (
    <>
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.title}>
          <div><FaPlus style={{ fontSize: "3rem" }} /></div>
          <div>
            <input
              style={{
                border: 'none',
                borderBottom: '2px solid #333',
                outline: 'none',
                padding: '10px',
                width: '100%',
              }}
              className={styles.input}
              placeholder='Title'
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value);
              
              }}
            />
            <span style={{color:"red"}}>{titleError===true?"Proper Title Should Be provided":""}</span>
          </div>
        </div>
        <div className={styles.title}>
          <div><MdOutlineNoteAlt style={{ fontSize: "3rem" }} /></div>
          <div>
            <input
              className={styles.input}
              onChange={(e)=>{
                setDiscription(e.target.value)
              }}
              value={discription}
              style={{
                border: 'none',
                borderBottom: '2px solid #333',
                outline: 'none',
                padding: '10px',
                width: '100%',
              }}
              placeholder='Discription'
            />
            <span style={{color:"red"}}>{titleDisc===true?"Discription Should Be Proper":""}</span>
          </div>
        </div>
        <div className={styles.tag}>
          <div
            className={styles.Taginner}
            style={getTagStyle(1)}
            onClick={() => setIndex(1)}
          >
            Today
          </div>
          <div
            className={styles.Taginner}
            style={getTagStyle(2)}
            onClick={() => setIndex(2)}
          >
            Tomorrow
          </div>
          <div
            className={styles.Taginner}
            style={getTagStyle(3)}
            onClick={() => setIndex(3)}
          >
            Other
          </div>
        </div>
        <div className={styles.time}>
        Time: <input  type="time" placeholder='Time' value={time} onChange={(e)=>{
          setTime(e.target.value)
        }}/>
        <span style={{color:"red"}}>{timeError==true?"Time Should Be Valid":""}</span>
        </div>
        <div className={styles.setTime}>
            <div className={styles.logo1}>
                <MdAccessAlarms /> Set Alarm
            

            </div>
            <div>
            <select
        id="dropdown"
        
     
        style={{
          padding: '5px',
          fontSize: '16px',
        }}
      >
   
        <option value="5 Minute">5 Minute</option>
        <option value="10 Minute">10 Minute</option>
        <option value="30 Minute">30 Minute</option>
        <option value="1:00 hour">1:00 Hour</option>
        <option value="2:00 hour">2:00 Hour</option>
      </select>
            </div>
        </div>
        
        <div className={styles.assign}>
            <div style={{display:"flex"}}>
                <div ><FaPlus style={{fontSize:"1rem"}}/></div>
                <div>Assigned To</div>

            </div>
            <div>
                <input type="radio" name='me'/> Me 
                
            </div>
            <div>
            <input type="radio" name="me"/> Other
                
            </div>
            <div>
            <input type="radio" name="me"/> Me&Other
                
            </div>
        </div>
        <div>
            <button className={styles.btn} onClick={()=>{
              // alert("Submitted");
              if(title===""||title.length<2)
              {
                setTitleError(true);

                
              }
              else if(discription.length==0||discription.length<2)
              {
                setTitleDisc(true);

              }
              else if(time=="")
              {
                setTimeError(true)
              }
              else
              {
                setTitleError(false);
                setTitleDisc(false);
                setTimeError(false);
                setTime("");
                setDiscription("");
                setTitle("")
                dispatch(Add({title:title,discription:discription,time:time}));
                navigate("/")
                
                
              }

              
            
              
            }}>Create </button>
        </div>
      </div>
      
    </div>
   
    </>

  );
};

export default Popup;
