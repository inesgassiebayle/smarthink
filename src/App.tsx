import React from 'react';
import './App.css';
import Button from "./common/Button/Button";

function App() {
  return (
    <div className="App">
        <Button callback={()=>{}} text="Hello" disabled={false}>World</Button>
    </div>
  );
}

export default App;
