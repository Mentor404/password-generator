import generator from "./generator.js";

const password = document.querySelector("#password");
const qtd = document.querySelector("#characters");
const numbers = document.querySelector("#chk-numbers");
const upper = document.querySelector("#chk-upper");
const lower = document.querySelector("#chk-lower");
const symbols = document.querySelector("#chk-symbols");
const generate = document.querySelector(".btn-generate");

export default () => {
  generate.addEventListener("click", (e) => {
    e.preventDefault();
    password.innerHTML = generatePass();
  });
};

function generatePass() {
  let generatedPass = generator(
      qtd.value,
      upper.checked,
      lower.checked,
      numbers.checked,
      symbols.checked
  );
  if(generatedPass.length>50) {
    generatedPass = 'Máximo de 50 caracteres';
  }
  return generatedPass || "Algo ficou faltando";
}
