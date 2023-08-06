import React, { useState } from 'react';

export default function App() {
  const [item, setItem] = useState('');

  const handleInput = (e) => {
    console.log(e.target.value);
    setItem(e.target.value);
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
          value={item}
          placeholder='Enter item'
        />
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}
