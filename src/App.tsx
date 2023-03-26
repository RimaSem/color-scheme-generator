import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <input type="color"></input>
        <div className="select">
          <select>
            <option>Monochrome</option>
            <option>Monochrome-dark</option>
            <option>Monochrome-light</option>
            <option>Analogic</option>
            <option>Complement</option>
            <option>Analogic-complement</option>
            <option>Triad</option>
          </select>
        </div>

        <button type="button">Get color scheme</button>
      </div>
    </div>
  );
}

export default App;
