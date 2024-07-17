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
          <p className="cars">{data.cars}</p>

          <p className="phone">{data.phone}</p>
          <p>{data.email}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Card;
