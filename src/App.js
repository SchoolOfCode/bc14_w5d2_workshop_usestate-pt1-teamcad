import "./App.css";
import { useState } from "react";



function App() {
  const [count, setCount] = useState(0);
  function handleCounterClick()
  {
    setCount(count + 1);
  }
  return (
    <main className="App">
      <h1>React useState</h1>
      <section>
        <h2 className= "count"> {count}</h2>
        <button className="countButton" onClick={handleCounterClick
        }>+1</button>
      </section>
      <section>
        <p className="randomBootcamper">BOOTCAMPER NAME</p>
        <button className="randomBootcamperName">
          Click me for a random bootcamper!
        </button>
      </section>
    </main>
  );
}

export default App;
