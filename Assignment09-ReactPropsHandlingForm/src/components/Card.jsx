import "../style/Card.css";

function Card({ name, job, hobby, age, onClick }) {
  return (
    <div className="card-container" onClick={onClick}>
      <p>Name :{name}</p>
      <p>Job:{job}</p>
      <p>Hobby:{hobby}</p>
      <p>Age:{age}</p>
    </div>
  );
}

export default Card;
