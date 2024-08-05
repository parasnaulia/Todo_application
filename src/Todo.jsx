import React from 'react';
import styles from './Todo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Tog } from './assets/Store/Slice';

const Todo = () => {
  const data = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Use conditional styling */}
        <div
          onClick={() => {
            dispatch(Tog(0));
          }}
          style={{ color: data === 0 ? 'black' : 'white', borderBottom:data === 0?"1px solid green":"" }}
        >
          Todo
        </div>
        <div
          onClick={() => {
            dispatch(Tog(1));
          }}  style={{ color: data === 1 ? 'black' : 'white',borderBottom:data === 1?"1px solid green":"" }}
        >
          Circle
        </div>
      </div>
    </div>
  );
};

export default Todo;
