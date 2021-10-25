import { useState } from "react";
import styled from "styled-components";
import CarList from "./components/car-list";
import CreateCar from "./components/create-car";
import "./App.css";

const TabButton = styled.button``;
const Content = styled.main``;

function App() {
  const [tab, setTab] = useState("list");

  return (
    <div className="App">
      <div>
        <TabButton onClick={() => setTab("list")}>Lista de carros</TabButton>
        <TabButton onClick={() => setTab("create")}>Adicionar carro</TabButton>
      </div>
      <Content>
        {tab === "list" && <CarList />}
        {tab === "create" && <CreateCar />}
      </Content>
    </div>
  );
}

export default App;
