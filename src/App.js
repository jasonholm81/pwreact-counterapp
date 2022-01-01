import React from 'react';
import './style.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(20);
  let myAge = 20;
  console.log(myAge);

  return (
    <div>
      <h2 style={{ color: 'red' }}>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
