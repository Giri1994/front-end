import { useState } from "react";
import React from 'react';

// function MyButton() {
//   const [count,setCount] =useState(0); 

//   function handleClick(){
//     setCount(count+1);
//     alert('You clicked me!');
//   }

//   return <button onClick={handleClick}>Click here {count}</button>;
// }

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default MyButton;