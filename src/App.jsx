import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/theme";
import Card from "./components/Card";

function App() {
  const [themeDark, setThemeDark] = useState(false);

  useEffect(() => {
    if (!themeDark) {
      document.body.style.backgroundColor = "rgb(48, 44, 44)";
      document.querySelector(".card").style.backgroundColor =
        "rgb(149, 143, 143)";
    } else {
      document.body.style.backgroundColor = "rgb(149, 143, 143)";
      document.querySelector(".card").style.backgroundColor = "rgb(48, 44, 44)";
    }
  }, [themeDark]);

  return (
    <ThemeProvider value={{ themeDark }}>
      <div className="w-3/4 grid grid-cols-1 mx-auto text-center">
        <button
          className="w-40 p-3 bg-red-600 text-white mb-10 mx-auto"
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
