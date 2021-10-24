import "./style.css";
import { API } from "./api";

const form = document.querySelector("form");
const content = {
  list: document.querySelector("#list"),
  create: document.querySelector("#create"),
};

function showMessage(message, color) {
  const header = document.querySelector("header");
  header.innerHTML = "";
  const p = document.createElement("p");
  p.style.color = color;
  p.textContent = message;
  header.appendChild(p);
}

function showErrorMessage(error) {
  showMessage(error.message, "#f00");
}

function showSuccessMessage(success) {
  showMessage(success.message, "#0f0");
}

function getCarsAndUpdateTable() {
  API.getAllCars()
    .then((cars) => updateTable(cars))
    .catch(showErrorMessage);
}

function createTable() {
  const table = document.createElement("table");
  table.innerHTML =
    "<thead><th>Imagem</th><th>Modelo</th><th>Ano</th><th>Placa</th><th>Cor</th><th></th></thead><tbody></tbody>";
  return table;
}

function addCarToTable(tbody, car) {
  const row = tbody.insertRow(-1);
  const imgCell = row.insertCell(-1);
  const img = document.createElement("img");
  img.src = car.image;
  img.className = "car-image";
  imgCell.appendChild(img);

  const modelCell = row.insertCell(-1);
  modelCell.textContent = car.brandModel;

  const yearCell = row.insertCell(-1);
  yearCell.textContent = car.year;

  const plateCell = row.insertCell(-1);
  plateCell.textContent = car.plate;

  const colorCell = row.insertCell(-1);
  const colorDiv = document.createElement("div");
  colorDiv.style.width = "15px";
  colorDiv.style.height = "15px";
  colorDiv.style.borderRadius = "50%";
  colorDiv.style.backgroundColor = car.color;
  colorCell.appendChild(colorDiv);

  const deleteCell = row.insertCell(-1);
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "x";
  deleteCell.appendChild(deleteButton);

  deleteButton.addEventListener("click", (ev) => {
    ev.preventDefault();
    API.deleteCar(car.plate).then(showSuccessMessage, showErrorMessage);
    getCarsAndUpdateTable();
  });
}

function updateTable(items) {
  content.list.innerHTML = "";
  const h3 = document.createElement("h3");
  h3.textContent = "Carros";
  content.list.appendChild(h3);

  if (items.length === 0) {
    const p = document.createElement("p");
    p.textContent = "Nenhum carro encontrado.";
    content.list.appendChild(p);
  } else {
    const table = createTable();
    const tbody = table.querySelector("tbody");
    items.forEach((car) => addCarToTable(tbody, car));
    content.list.appendChild(table);
  }
}

function switchTab(target) {
  const header = document.querySelector("header");
  header.innerHTML = "";
  for (const [key, value] of Object.entries(content)) {
    key === target
      ? value.removeAttribute("hidden")
      : value.setAttribute("hidden", true);
  }

  if (!content.list.hasAttribute("hidden")) getCarsAndUpdateTable();
}

form.addEventListener(
  "submit",
  (ev) => {
    ev.preventDefault();
    const f = ev.currentTarget;
    const car = {
      image: f.image.value,
      brandModel: f.brandModel.value,
      year: f.year.value,
      plate: f.plate.value,
      color: f.color.value,
    };
    API.createCar(car).then(showSuccessMessage).catch(showErrorMessage);
  },
  false
);

switchTab("list");
window.switchTab = switchTab;

getCarsAndUpdateTable();
