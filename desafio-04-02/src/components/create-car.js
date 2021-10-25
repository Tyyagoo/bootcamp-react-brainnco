import styled from "styled-components";

const URL = "http://localhost:3333/cars";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const Input = styled.input`
  input {
    display: block;
    margin: auto auto;
  }
`;

function CreateCar() {
  function handleSubmit(ev) {
    ev.preventDefault();
    const f = ev.currentTarget;
    const car = {
      image: f.image.value,
      brandModel: f.brandModel.value,
      year: f.year.value,
      plate: f.plate.value,
      color: f.color.value,
    };

    fetch(URL, { headers, method: "post", body: JSON.stringify(car) });
  }

  return (
    <>
      <h3>Adicionar</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Imagem (URL):
          <Input id="image" name="image" type="url" />
        </label>

        <label>
          Marca / Modelo:
          <Input id="brandModel" name="brandModel" type="text" />
        </label>

        <label>
          Ano:
          <Input id="year" name="year" type="number" />
        </label>

        <label>
          Placa:
          <Input id="plate" name="plate" type="text" />
        </label>

        <label>
          Cor:
          <Input id="color" name="color" type="color" />
        </label>

        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

export default CreateCar;
