import styled from "styled-components";

const URL = "http://localhost:3333/cars";

const ColorCircle = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;

function CarCard({ car, onDeleteCar }) {
  function deleteCar() {
    const plate = car.plate;
    fetch(URL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "delete",
      body: JSON.stringify({ plate }),
    });
    onDeleteCar();
  }

  return (
    <tr>
      <td>
        <img src={car.image} alt="car" />
      </td>
      <td>{car.brandModel}</td>
      <td>{car.year}</td>
      <td>{car.plate}</td>
      <td>
        <ColorCircle color={car.color} />
      </td>
      <td>
        <button onClick={deleteCar}>x</button>
      </td>
    </tr>
  );
}

export default CarCard;
