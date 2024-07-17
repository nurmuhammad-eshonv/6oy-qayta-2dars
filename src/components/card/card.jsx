import "./card.css";

function Card(props) {
  const { data } = props;
  return (
    <div className="card">
      <img className="image" src={data.image} alt="" />

      <div className="wrapper">
        <div>
          <h2 className="firstN">{data.firstName}</h2>
          <p className="lastN">{data.lastName}</p>
          <p className="cars">{data.cars[1]}</p>

          <p className="phone">{data.phone}</p>
        </div>
      <p className="email">{data.email}</p>
       
      </div>

    </div>
  );
}

export default Card;
