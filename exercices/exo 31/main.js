import People from "./people.js";

let peoples = [];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("people-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const newPeople = new People(
      document.getElementById("firstname").value,
      document.getElementById("lastname").value,
      document.getElementById("birthdate").value
    );

    peoples.push(newPeople);

    const tBodyEl = document.getElementById('tbody-result')

    const TREl = document.createElement('tr')

    for(const key in newPeople) {
      const TDEl = document.createElement('td')
      TDEl.textContent = newPeople[key]
      TREl.appendChild(TDEl)
    }

    tBodyEl.appendChild(TREl)
  });
});
