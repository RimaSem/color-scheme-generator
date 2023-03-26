import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <input type="color" value="#f55a5a"></input>
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
      <main>
        <div className="color color-1">
          <div className="color-code">#F55A5A</div>
        </div>
        <div className="color color-2">
          <div className="color-code">#2B283A</div>
        </div>
        <div className="color color-3">
          <div className="color-code">#FBF3AB</div>
        </div>
        <div className="color color-4">
          <div className="color-code">#AAD1B6</div>
        </div>
        <div className="color color-5">
          <div className="color-code">#A626D3</div>
        </div>
      </main>
    </div>
  );
}

export default App;
