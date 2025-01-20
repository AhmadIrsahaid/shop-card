const Card = (props) => {
  const Names =(props.name) ? props.name : "Fancy Product"
  const cost = (props.cost) ? props.cost : "$40.00 - $80.00"
  const botton = (props.click) ? props.click : "Add to cart"
  const star = (props.star) ? props.star : ""
  const sale = (props.sale) ? props.sale : "" 
  return(
    
  <div className="card h-100">
    {sale}
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      <div className="card-body p-4">
        <div className="text-center">
          <h5 className="fw-bolder">{Names}</h5>
          {star}
          {cost}
        </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <a className="btn btn-outline-dark mt-auto" href="#" onClick={props.incrementCount}>
            {botton}
          </a>
        </div>
      </div>
    </div>
)

}

export default Card;