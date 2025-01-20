const Card = (props) => {
  const dis = props.dis ? props.dis : "";
  const star = props.star ? props.star : "";
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {dis}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{props.name}</h5>
            {star}
            {props.sale}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a
              className="btn btn-outline-dark mt-auto"
              href="#"
              onClick={props.incrementCount}
            >
              {props.click}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
