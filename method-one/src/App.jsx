import Section from './components/Section'
import Foter from './components/Foter'
import Header from './components/Header'
import Navpar from './components/Navpar'
import './styles.css';
import React,{useState} from 'react';
function App() {
  const [count,setCount]=useState(0);  
  function incrementCount(){
    setCount(count => count+1);
  }
  
  return (
      <div>  
      <Navpar count={count} />
    <Header/>
    <Section incrementCount={incrementCount}/>
    <Foter/>
    </div>
  
  )
}

export default App
