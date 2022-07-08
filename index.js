const inputStart = document.querySelector("#start");
const inputEnd = document.querySelector("#end");
const button = document.querySelector("button");
const span = document.querySelector("h3 > span");

function checar() {
  let start = inputStart.value;
  let end = inputEnd.value;
  start = new Date(start);
  end = new Date(end);
  let diffinTime = Math.abs(end - start);
  let timeInOneDay = 1000 * 60 * 60 * 24;
  let diffinDays = diffinTime / timeInOneDay;
  if (diffinDays % 2 == 0) return "Dia de Trabalho";
  else if (diffinDays % 2 !== 0) return "Folgaaa";
  return diffinDays;
}

button.addEventListener("click", () => {
  const diffinDays = checar();
  span.innerHTML = diffinDays;

  console.log(diffinDays);
});
