import React, { useState } from 'react';

export default function ToDoItem(props) {
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    setIsClicked(prevStatus => !prevStatus)
  };
  
  return (
    <li 
      // style={{textDecoration: isClicked ? 'line-through' : 'none'}} 
      // onClick={handleClick}
      onClick={() => {
        props.onClick(props.id)
      }}
    >
      {props.item}
    </li>
  );
}
