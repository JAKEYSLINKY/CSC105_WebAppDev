import Card from "./Card";
function List({ user }, onClick) {
  return (
    <div>
      {/* Stupid way */}
      {/* <Card user={{ Name: "John Wick", job: "Killer", hobby: "Walk a dog" }} />
	  <Card user={{ Name: "Jeans Walk", job: "Killer", hobby: "Walk a dog" }} />
	  <Card user={{ Name: "Jaan Wook", job: "Killer", hobby: "Walk a dog" }} />
	  <Card user={{ Name: "Jaan Wook", job: "Killer", hobby: "Walk a dog" }} />
	  <Card user={{ Name: "Jaan Wook", job: "Killer", hobby: "Walk a dog" }} />
	  <Card user={{ Name: "June Wake", job: "Killer", hobby: "Walk a dog" }} /> */}
      {/* Smart Way */}

      {user.map((detail) => {
        return (
          <Card
            key={detail.age}
            name={detail.Name}
            job={detail.job}
            hobby={detail.hobby}
            age={detail.age}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
}
export default List;
