import { useState } from "react";

function Type() {
  const [getter, setter] = useState(false);
  function handleEvent(value) {
    setter(value);
    console.log(getter);
  }
  function changeColor(value) {
    if (value == true) {
      return "red";
    } else {
      return "white";
    }
  }

  return (
    <div>
      <input
        onFocus={() => handleEvent(false)}
        onBlur={() => handleEvent(true)}></input>
      <p style={{ color: changeColor(getter) }}>Type Here bro</p>
    </div>
  );
}

export default Type;
