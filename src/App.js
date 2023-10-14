import "./App.css";
import { useState } from "react";

import Square from "./Square";
import Input from "./Input";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="app">
      <Square colorValue={colorValue} hexValue={hexValue} isDark={isDark} />
      <Input
      colorValue={colorValue}
      hexValue={hexValue}
      setColorValue={setColorValue}
      setHexValue = {setHexValue}
      isDark = {isDark}
      setIsDark={setIsDark} />
    </div>
  );
}

export default App;
