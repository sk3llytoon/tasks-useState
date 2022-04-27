import React, {useState} from 'react';
import './App.css';

function App() {

  let [a, setA]=useState(0)

  const onClickHandler=()=>{
    setA(++a)
  }

  const onClickReset=()=>{
    setA(0)
  }

  return (
    <div className="App">
      <h1>{a}</h1>
        <button onClick={onClickHandler}>Add Number</button>
        <button onClick={onClickReset}>Reset</button>
    </div>
  );
}

export default App;
