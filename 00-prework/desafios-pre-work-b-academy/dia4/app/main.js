import "./style.css";
import { API } from "./api";

const content = {
  list: document.querySelector("#list"),
  create: document.querySelector("#create"),
};

function switchTab(target) {
  for (const [key, value] of Object.entries(content)) {
    key === target
      ? value.removeAttribute("hidden")
      : value.setAttribute("hidden", true);
  }
}

function createTable() {
  const table = document.createElement("table");
  table.innerHTML =
    "<thead><th>Imagem</th><th>Modelo</th><th>Ano</th><th>Placa</th><th>Cor</th></thead><tbody></tbody>";
  return table.querySelector("tbody");
}

function addCarToTable(tbody, car) {
  const row = tbody.insertRow(-1);
  const imgCell = row.insertCell(-1);
  const img = document.createElement("img");
  img.src = car.img;
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
    const tbody = createTable();
    items.forEach((car) => addCarToTable(tbody, car));
  }
}

switchTab("list");
window.switchTab = switchTab;

API.getAllCars()
  .then((cars) => updateTable(cars))
  .catch((error) => alert(error.message));
