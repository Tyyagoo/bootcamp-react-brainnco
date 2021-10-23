function fn(string) {
  return ["", "de", "da", "do", "dos"].some((v) => v === string);
}

function capitalize(string) {
  const [first, ...str] = string.toLowerCase();
  return [first.toUpperCase(), ...str].join("");
}

document.querySelector("#name").addEventListener(
  "input",
  (event) => {
    const text = event.currentTarget.value;
    const words = text.split(" ");
    const capitalizedWords = words.map((val) =>
      fn(val.toLowerCase()) ? val.toLowerCase() : capitalize(val)
    );
    event.currentTarget.value = capitalizedWords.join(" ");
  },
  false
);

function mapColorToOption(colors) {
  const options = [];
  for (const [key, value] of Object.entries(colors)) {
    const opt = document.createElement("option");
    opt.text = key;
    opt.value = value;
    options.push(opt);
  }
  return options;
}

function createColorDiv({ value }) {
  const div = document.createElement("div");
  div.style.display = "inline-block";
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = value;
  return div;
}

const colors = {
  white: "#eee",
  black: "#111",
  red: "#f00",
  green: "#0f0",
  blue: "#00f",
};
const select = document.createElement("select");
select.multiple = true;

select.appendChild(document.createElement("option"));
mapColorToOption(colors).forEach((opt) => select.appendChild(opt));

const colorsContainer = document.createElement("div");

select.addEventListener(
  "change",
  (ev) => {
    colorsContainer.innerHTML = "";
    const selectedColors = [...ev.currentTarget.selectedOptions].map((opt) => ({
      text: opt.text,
      value: opt.value,
    }));

    selectedColors.forEach((color) =>
      colorsContainer.appendChild(createColorDiv(color))
    );
  },
  false
);

document.querySelector(".app").insertAdjacentElement("beforeend", select);
document
  .querySelector(".app")
  .insertAdjacentElement("beforeend", colorsContainer);
