import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "./Card"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const Cardcont=(props)=>{
  const costes=<div> <span className="text-muted text-decoration-line-through">$ 20.00 </span>
  $18.00
  </div>
  const cost=<div><span className="text-muted text-decoration-line-through">$50.00</span>
  $25.00</div>
  const botton="View options"
  const star =<div>
    <FontAwesomeIcon icon={faStar} style={{color: "#ffd43b",}} />
    <FontAwesomeIcon icon={faStar} style={{color: "#ffd43b",}} />
    <FontAwesomeIcon icon={faStar} style={{color: "#ffd43b",}} />
    <FontAwesomeIcon icon={faStar} style={{color: "#ffd43b",}} />
    <FontAwesomeIcon icon={faStar} style={{color: "#ffd43b",}} />
  </div>
  const sale =<div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
  Sale
</div>
  return(
    <div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      <div className="col mb-5">
        <Card click={botton}/>
      </div>
      <div className="col mb-5">
        <Card name="Special Item" cost={costes} star={star} sale={sale} incrementCount={props.incrementCount}/>
      </div>
      <div className="col mb-5">
        <Card name="Sale Item" cost={cost} sale={sale} incrementCount={props.incrementCount}/>
      </div>
      <div className="col mb-5">
        <Card name="Popular Item" cost="$40.00" star={star} incrementCount={props.incrementCount}/>
      </div>
      <div className="col mb-5">
        <Card name="Sale Item" cost={cost} sale={sale} incrementCount={props.incrementCount}/>
      </div>
      <div className="col mb-5" >
        <Card cost="$120.00 - $280.00" click={botton} />
      </div>
      <div className="col mb-5">
        <Card name="Special Item" cost={costes} star={star} sale={sale} incrementCount={props.incrementCount}/>
      </div>
      <div className="col mb-5">
        <Card name="Popular Item" cost="$40.00" star={star} incrementCount={props.incrementCount}/>
      </div>
    </div>
  </div>
)
}
export default Cardcont