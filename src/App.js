import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsForm from "./components/ProductsForm/ProductsForm";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import ProductsList from "./components/ProductsList/ProductsList";
import Button from "./components/Button/Button";

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ProductsList />} />
          <Route path="/form" element={<ProductsForm />} />
        </Route>
      </Routes>
      <Button onClick={onToggleButton}>Toggle</Button>
    </div>
  );
}

export default App;
