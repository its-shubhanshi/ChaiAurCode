import { useState } from "react";
import "./App.css";
import Card from "./components/Card";


function App() {
  let [counter, setCounter] = useState(5);

  function addValue() {
    setCounter(counter + 1);
  }
  const removeValue = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const myOBJ={
    Id:1,
    userName:"Ankita Singh",
  }
  const newarr=[1,2,3]
  return (
    <>
      <h1 className="text-3xl font-bold bg-green-500 p-5 rounded-xl">
        Counter App
      </h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue} className="bg-red-600">
        Add Value
      </button>
      <button onClick={removeValue} className="bg-blue-500">
        Remove Value
      </button>

      <Card channel="About Macbook" someObj={myOBJ} newARR={newarr}/>
      <Card channel="About Macbook"/>
    </>
  );
}

export default App;
