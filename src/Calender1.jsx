// src/DatePickerComponent.js
import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';

const DatePickerComponent = () => {
  // Initialize the state with the current date
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  });

  // Update state when the date changes
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <>
    <div style={styles.container}>
      <label htmlFor="datePicker" style={styles.label}>Select Date:</label>
      <input
        id="datePicker"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        style={styles.datePicker}
      />
      <p style={styles.dateText}> Date: {selectedDate}</p>
    </div>
  
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  },
  label: {
    fontSize: '1em',
    marginBottom: '5px',
  },
  datePicker: {
    padding: '8px',
    fontSize: '1em',
    border: '1px solid #ddd',
    borderRadius: '4px',
    outline: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'border-color 0.3s ease',
  },
  dateText: {
    marginTop: '10px',
    fontSize: '1em',
  },
};

export default DatePickerComponent;
