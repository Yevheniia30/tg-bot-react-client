import { useEffect } from "react";
import "./App.css";
import Button from "./components/Button/Button";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Button />
    </div>
  );
}

export default App;
