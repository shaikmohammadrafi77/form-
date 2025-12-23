import { useState } from "react";
import "./Calculator.css"
function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [r, setR] = useState(0);

  return (
    <div>
      <h3>Simple Calculator</h3>

      <input type="number" onChange={e => setA(+e.target.value)} />
      <input type="number" onChange={e => setB(+e.target.value)} />

      <br /><br />

      <button onClick={() => setR(a + b)}>+</button>
      <button onClick={() => setR(a - b)}>-</button>
      <button onClick={() => setR(a * b)}>*</button>
      <button onClick={() => setR(a / b)}>/</button>

      <h3>Result: {r}</h3>
    </div>
  );
}

export default App;