import React, { useState } from 'react';

export default function App() {
  const [item, setItem] = useState();
  const [items, setItems] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    setItem(value);
  };

  const populateList = () => {
    setItems((prevValue) => [...prevValue, item]);
  };

  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <div className='form'>
        <input
          type='text'
          onChange={handleInput}
          // value={item}
          placeholder='Enter item'
        />
        <button onClick={populateList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((data, i) => {
            return <li key={i}>{data}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
