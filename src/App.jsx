import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/theme";
import Card from "./components/Card";

function App() {
  const [themeDark, setThemeDark] = useState(false);

  useEffect(() => {
    if (!themeDark) {
      document.querySelector(".card").style.backgroundColor = "#FFF";
    } else {
      document.querySelector(".card").style.backgroundColor = "#000";
    }
  }, [themeDark]);

  return (
    <ThemeProvider value={{ themeDark }}>
      <div className="w-96 grid grid-cols-1 mx-auto text-center">
        <button
          className="w-40 p-3 bg-red-600"
          onClick={() => setThemeDark(!themeDark)}
        >
          Change Theme
        </button>
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
