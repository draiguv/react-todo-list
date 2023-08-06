import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

export default function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    setItem(value);
  };

  const populateList = () => {
    setItems((prevValue) => [...prevValue, item]);
    setItem('');
  };

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter((item, index) => index !== id)
    });
  };
  
  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <div className='form'>
        <input
          type='text'
          value={item}
          onChange={handleInput}
          placeholder='Enter item'
        />
        <button onClick={populateList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((data, index) =>
            <ToDoItem
              key={index}
              id={index}
              item={data}
              onClick={deleteItem}
            />
          )}
        </ul>
      </div>
    </div>
  );
}
