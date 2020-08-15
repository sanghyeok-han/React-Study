import React from 'react';
import './App.css'
import Hello from './Hello'
import Wrapper from './Wrapper';


function App() {
  return (
    <Wrapper>
        <Hello name="react" color="red" isSpecial={true}/>
        <Hello color="pink" isSpecial />
    </Wrapper>
  )
}



export default App;