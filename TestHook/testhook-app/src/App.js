import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  // 랜더링 될때마다 매번 실행됌
  useEffect(() => {
    console.log('name 변화')
  }, [name]);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>     
      <span>count : {count} </span> 
      <input type="text" value={name} onChange={handleInputChange}/>
      <span>name : {name} </span>
    </div>
  );
}

export default App;
