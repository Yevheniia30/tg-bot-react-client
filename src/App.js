import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Button onClick={onToggleButton}>Toggle</Button>
    </div>
  );
}

export default App;
