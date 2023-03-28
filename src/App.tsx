import { useState, useRef, SyntheticEvent } from "react";
import "./App.scss";

function App() {
  const [color, setColor] = useState<string | undefined>("#f55a5a");
  const [mode, setMode] = useState<string | undefined>("monochrome");
  const colorRef = useRef<HTMLInputElement>(null);
  const modeRef = useRef<HTMLSelectElement>(null);
  const colorElements = document.querySelectorAll<HTMLElement>(".color");
  const codeElements = document.querySelectorAll<HTMLElement>(".color-code");

  function handleClick() {
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${color?.slice(
        1
      )}&mode=${mode}&count=5`
    )
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < 5; i++) {
          colorElements[i].style.backgroundColor = data.colors[i].hex.value;
          codeElements[i].textContent = data.colors[i].hex.value;
        }
      });
  }

  function copyToClipboard(e: SyntheticEvent) {
    // const copyHex = document.getElementById("myInput");
    // e.target.select();
    // copyHex.setSelectionRange(0, 99999);

    if ((e.target as HTMLDivElement).textContent) {
      const text = (e.target as HTMLDivElement).textContent;
      navigator.clipboard.writeText(text || "");
    } else {
      const text = (e.target as HTMLDivElement).style.backgroundColor;
      navigator.clipboard.writeText(text || "");
    }

    // var tooltip = document.getElementById("myTooltip");
    // tooltip.innerHTML = "Copied: " + copyText.value;
  }

  return (
    <div className="App">
      <div className="header">
        <input
          ref={colorRef}
          onChange={() => setColor(colorRef.current?.value)}
          type="color"
          name="color-code"
          defaultValue="#f55a5a"
        ></input>
        <div className="select">
          <select
            name="mode"
            ref={modeRef}
            onChange={() => setMode(modeRef.current?.value)}
          >
            <option value="monochrome">Monochrome</option>
            <option value="monochrome-dark">Monochrome-dark</option>
            <option value="monochrome-light">Monochrome-light</option>
            <option value="analogic">Analogic</option>
            <option value="complement">Complement</option>
            <option value="analogic-complement">Analogic-complement</option>
            <option value="triad">Triad</option>
          </select>
        </div>

        <button type="button" onClick={handleClick}>
          Get color scheme
        </button>
      </div>
      <main>
        <div className="color color-1" onClick={copyToClipboard}>
          <div className="color-code hex-code-1">#F55A5A</div>
        </div>
        <div className="color color-2" onClick={copyToClipboard}>
          <div className="color-code">#2B283A</div>
        </div>
        <div className="color color-3" onClick={copyToClipboard}>
          <div className="color-code">#FBF3AB</div>
        </div>
        <div className="color color-4" onClick={copyToClipboard}>
          <div className="color-code">#AAD1B6</div>
        </div>
        <div className="color color-5" onClick={copyToClipboard}>
          <div className="color-code">#A626D3</div>
        </div>
      </main>
    </div>
  );
}

export default App;
