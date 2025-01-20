import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Navpar from './components/Navpar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const dis=<div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
  Sale
</div>
const name1 ="Fancy Product";
const name2 ="Special Item";
const name3 ="Sale Item";
const name4="Popular Item";
const sale1="$40.00 - $80.00"
const sale="$120.00 - $280.00"
const sale2= <div>
<span className="text-muted text-decoration-line-through">$20.00</span>
$18.00
</div>
const sale3 =<div>
<span className="text-muted text-decoration-line-through">$50.00</span>
$25.00
</div>
const sale4 ="  $40.00"
  const clicks1="View options"
  const clicks2="Add to cart"
  const [count,setCount]=useState(0);  
  function incrementCount(){
    setCount(count => count+1);
  }

  const star=<div>
    <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#ffea00",}} />
    <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#ffea00",}} />
    <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#ffea00",}} />
    <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#ffea00",}} />
    <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#ffea00",}} />
  </div>
  return (
    <div>
      <Navpar count={count}/>
      <Header/>
      <div class="container px-4 px-lg-5 mt-5">
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      <div class="col mb-5">
        <Card name={name1} sale={sale1} click={clicks1} />
        </div>
      <div class="col mb-5">
        <Card name={name2} sale={sale2} click={clicks2} incrementCount={incrementCount} dis={dis} star={star}/>
        </div>
      <div class="col mb-5">
        <Card name={name3} sale={sale3}  click={clicks2} incrementCount={incrementCount} dis={dis}/>
        </div>
      <div class="col mb-5">
        <Card name={name4} sale={sale4}  click={clicks2} incrementCount={incrementCount}/>
        </div>
      <div class="col mb-5">
        <Card name={name3} sale={sale3}  click={clicks2} incrementCount={incrementCount} dis={dis}/>
        </div>
      <div class="col mb-5">
        <Card name={name1} sale={sale}  click={clicks1}/>
        </div>
      <div class="col mb-5" >
        <Card name={name2} sale={sale2}  click={clicks2} incrementCount={incrementCount} dis={dis}/>
        </div>
      <div class="col mb-5">
        <Card name={name4} sale={sale4}  click={clicks2} incrementCount={incrementCount}/>
        </div>
      </div>
    </div>
      
      <Footer/>
      </div>
    
  );
}

export default App;
