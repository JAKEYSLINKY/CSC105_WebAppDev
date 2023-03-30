function Card({ header, body, number = 18, children, color }) {
  return (
    <div style={{ backgroundColor: color }}>
      <h1>{header}</h1>
      <p>
        {body} <br />
        {number}
      </p>
      {children}
    </div>
  );
}

export default Card;
