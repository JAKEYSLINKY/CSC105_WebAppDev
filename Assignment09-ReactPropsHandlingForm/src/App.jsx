import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import List from "./components/List";
import Type from "./components/Type";
import Form from "./components/Form";
// import helloCard from "./components/helloCard";

function App() {
  const userObject = [
    {
      Name: "John Wick",
      job: "Killer",
      hobby: "Walk a dog",
      age: "12",
    },
    {
      Name: "Jeans Walk",
      job: "Kill Killer",
      hobby: "Feed the dog",
      age: "13",
    },
    {
      Name: "Jick Wong",
      job: "Kill Jeans",
      hobby: "Eat the dog",
      age: "14",
    },
    {
      Name: "Wohn Jick",
      job: "Kill Jick",
      hobby: "Walk for dog",
      age: "15",
    },
    // {
    //   Name: "wdq Wick",
    //   job: "Killer",
    //   hobby: "Walk a dog",
    //   age: "16",
    // },
    // {
    //   Name: "qwd Wick",
    //   job: "Killer",
    //   hobby: "Walk a dog",
    //   age: "17",
    // },
  ];
  const onClickFunction = () => {
    console.log("HEY");
  };
  function onClick2() {}
  return (
    <div className="App">
      <List user={userObject} onClick={onClickFunction} />
      <Type/>
      <Form/>
    </div>
  );
}


export default App;
