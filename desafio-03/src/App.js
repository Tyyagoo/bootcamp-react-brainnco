import { useState } from "react";
import CarList from "./components/car-list";
import CreateCar from "./components/create-car";
import "./App.css";

function App() {
  const [tab, setTab] = useState("list");

  return (
    <div className="App">
      <div className="tabs">
        <button className="tabheader" onClick={() => setTab("list")}>
          Lista de carros
        </button>
        <button className="tabheader" onClick={() => setTab("create")}>
          Adicionar novo carro
        </button>

        <div className="content">
          {tab === "list" && <CarList />}
          {tab === "create" && <CreateCar />}
        </div>
      </div>
    </div>
  );
}

export default App;
