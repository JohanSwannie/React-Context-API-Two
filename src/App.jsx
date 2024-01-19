import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/theme";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  return (
    <ThemeProvider value={{ themeMode }}>
      <div>
        <button onClick={() => setThemeMode(!themeMode)}>Change Theme</button>
      </div>
      <Card />
    </ThemeProvider>
  );
}

export default App;
