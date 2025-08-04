import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "./Card"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import img1 from "../image/1.jpg";
import img2 from "../image/2.jpg";
import img3 from "../image/3.jpg";
import img4 from "../image/4.jpg";
import img5 from "../image/5.jpg";
import img6 from "../image/6.jpg";
import img7 from "../image/3b8495512d70cdf1b84b6600deeab616.jpg";
import img8 from "../image/e1b3d2f9274ad0d277f1a31c215ec131.jpg";
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
        <Card click={botton} image={img7}/>
      </div>
      <div className="col mb-5">
        <Card name="Special Item" cost={costes} star={star} sale={sale} incrementCount={props.incrementCount} image={img1}/>
      </div>
      <div className="col mb-5">
        <Card name="Sale Item" cost={cost} sale={sale} incrementCount={props.incrementCount} image={img2}/>
      </div>
      <div className="col mb-5">
        <Card name="Popular Item" cost="$40.00" star={star} incrementCount={props.incrementCount} image={img3}/>
      </div>
      <div className="col mb-5">
        <Card name="Sale Item" cost={cost} sale={sale} incrementCount={props.incrementCount} image={img4}/>
      </div>
      <div className="col mb-5" >
        <Card cost="$120.00 - $280.00" click={botton}  image={img5}/>
      </div>
      <div className="col mb-5">
        <Card name="Special Item" cost={costes} star={star} sale={sale} incrementCount={props.incrementCount} image={img6}/>
      </div>
      <div className="col mb-5">
        <Card name="Popular Item" cost="$40.00" star={star} incrementCount={props.incrementCount} image={img8}/>
      </div>
    </div>
  </div>
)
}
export default Cardcont