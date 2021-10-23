import "./style.css";

document.querySelector('[data-js="app"]').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`;

document.querySelector('[data-js="anchor"]').addEventListener(
  "click",
  (event) => {
    const app = document.querySelector('[data-js="app"]');
    if (app.classList.contains("hidden")) {
      app.classList.remove("hidden");
      event.target.innerHTML = "Esconder";
    } else {
      app.classList.add("hidden");
      event.target.innerHTML = "Mostrar";
    }
  },
  false
);
