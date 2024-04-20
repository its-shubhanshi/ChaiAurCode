import { useState } from "react";

function App() {
  const [color, setColor] = useState("orangered");

  return (
    <div
      className="w-screen h-screen duration-200 text-center p-10"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className="fixed flex justify-center p-5 bg-white w-scren bottom-10 inset-x-0 gap-3">
        <button className="outline-none px-5 rounded-full shadow-large" style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>Red</button>
        <button className="outline-none px-5 rounded-full shadow-large" style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>Green</button>
        <button className="outline-none px-5 rounded-full shadow-large" style={{backgroundColor:"olive"}} onClick={()=>{setColor("Olive")}}>Olive</button>
        <button className="outline-none px-5 rounded-full shadow-large" style={{backgroundColor:"yellow"}} onClick={()=>{setColor("yellow")}}>Yellow</button>
        <button className="outline-none px-5 rounded-full shadow-large" style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>blue</button>
      </div>
    </div>
  );
}

export default App;
