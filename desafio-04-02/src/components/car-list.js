import CarCard from "./car-card";
import { useState, useEffect } from "react";

const URL = "http://localhost:3333/cars";

function CarList() {
  const [cars, setCars] = useState([]);

  async function fetchCars() {
    const response = await fetch(URL);
    const json = await response.json();
    if (response.status === 200) {
      setCars(json);
      console.log("fetched cars");
    } else {
      console.log(json);
    }
  }

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <>
      <h3>Carros</h3>
      {cars.length === 0 ? (
        "Nenhum carro foi encontrado."
      ) : (
        <table style={{ flex: "1 1" }}>
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Placa</th>
              <th>Cor</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <CarCard key={car.plate} car={car} onDeleteCar={fetchCars} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default CarList;
