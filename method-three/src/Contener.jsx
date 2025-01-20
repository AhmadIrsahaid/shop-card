import { useState } from "react";
import Cardcont from "./components/Cardcont"
import Footer from "./components/Footer"
import Navparandheader from "./components/Navparandheader"

const Contener=()=>{

  const [count,setCount]=useState(0);

  function incrementCount(){
    setCount(count => count+1);
  }

  return (
  <div>
    <Navparandheader count={count}/>
    <Cardcont incrementCount={incrementCount}/>
    <Footer/>
  </div>
    
  )
}
export default Contener