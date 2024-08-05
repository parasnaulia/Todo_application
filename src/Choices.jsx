import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tog1 } from './assets/Store/Slice3';

const Choices = ({ data, index }) => {
  const dispatch = useDispatch();
  const mainIndex = useSelector((state) => state.todoIndex);

  return (
    <>    
    <div
      onClick={() => {
        dispatch(Tog1(index));
      }}
      style={{
        borderBottom: mainIndex === index ? '2px solid rgb(143, 185, 84)' : 'none',
        cursor: 'pointer', // Optional: Add a pointer cursor for better UX
        padding: '10px', // Optional: Add padding for better appearance
      }}
    >
      {data}
    </div>
   
    </>

  );
};

export default Choices;
