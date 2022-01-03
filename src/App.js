
import React from 'react';
import './App.css';

//funcion normal
function HelloWord(props) {

  return (
    <div id='hello'>
      <h3>{props.subtitle}</h3>
      {props.mytext}
      </div>
  )
}

function App() {
  return (
  <div>This is my component:
    <HelloWord mytext="Hello Reptil" subtitle="loremp ispum"/>
    <HelloWord mytext="Hello Fazt" subtitle="Component"/>
    <HelloWord mytext="Hello Willy" subtitle="Ipsum Loremp"/> </div>
  );
}
export default App;
