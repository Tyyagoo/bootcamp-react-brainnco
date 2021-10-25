const URL = "http://localhost:3333/cars";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

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
          <input id="image" name="image" type="url" />
        </label>

        <label>
          Marca / Modelo:
          <input id="brandModel" name="brandModel" type="text" />
        </label>

        <label>
          Ano:
          <input id="year" name="year" type="number" />
        </label>

        <label>
          Placa:
          <input id="plate" name="plate" type="text" />
        </label>

        <label>
          Cor:
          <input id="color" name="color" type="color" />
        </label>

        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

export default CreateCar;
