import { useState } from "react";
import "./App.css";
import Card from "../src/components/Card";

const object = [
  {
    header: "This is title",
    body: "Hello, World",
    number: 888,
    addres: "wwww",
  },
  {
    header: "This is title",
    body: "Hello, World",
    addres: "",
  },
  {
    header: "This is wd",
    body: "Hello, ",
    addres: "",
  },
];

function App() {
  const [color, setColor] = useState("purple");
  return (
    <div className="App">
      {/* <Card header="This is title" body="Hello, World" number={888} />
      <Card header="This is Note" body="Hello HI" number={999} /> */}
      {object.map((note) => {
        return (
          <Card
            header={note.header}
            body={note.body}
            number={note.number}
            color={color}
          >
            <h1>hello</h1>
          </Card>
        );
      })}
      <button onClick={() => setColor("red")}>Change color</button>
    </div>
  );
}

export default App;
