const form = document.querySelector("form");
const table = document.querySelector("tbody");

function addToTable({ img, model, year, plate, color }) {
  clearTable();
  const row = table.insertRow(-1);

  const imgCell = row.insertCell(-1);
  imgCell.innerHTML = `<img src=${img} class="car-image"/>`;

  const modelCell = row.insertCell(-1);
  modelCell.textContent = model;

  const yearCell = row.insertCell(-1);
  yearCell.textContent = year;

  const plateCell = row.insertCell(-1);
  plateCell.textContent = plate;

  const colorCell = row.insertCell(-1);
  colorCell.innerHTML = `<div style="width: 25px; height: 25px; background-color: ${color}; border-radius: 50%;"></div>`;
}

function clearTable() {
  table.innerHTML = "";
}

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const f = ev.currentTarget;
  const data = {
    img: f.img.value,
    model: f.model.value,
    year: f.year.value,
    plate: f.plate.value,
    color: f.color.value,
  };
  addToTable(data);
});
