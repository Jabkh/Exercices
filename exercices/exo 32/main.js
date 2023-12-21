import People from "./people.js";

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementsByClassName("modal")[0];

  document.getElementById("modal-btn-close")?.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) modal.style.display = "none";
  });

  document.getElementById("btn-show-modal")?.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  document.getElementById("people-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const myPeoples = [];
   
    const newPeople = new People(
      document.getElementById("firstname").value,
      document.getElementById("lastname").value,
      document.getElementById("birthDate").value
    );

    myPeoples.push(newPeople);

    
    const tBodyEl = document.getElementById("mon-tbody");

    const TRE = document.createElement("tr");

    const deleteBTNElement = document.createElement("button");
    deleteBTNElement.textContent = "➖";

    for (const key in newPeople) {
      const TDE = document.createElement("td");
      TDE.textContent = newPeople[key];
      TRE.appendChild(TDE);
      TRE.appendChild(deleteBTNElement);
      deleteBTNElement.addEventListener("click", () => {
        TRE.remove();
        myPeoples.shift(newPeople);
      });
    }

    tBodyEl.appendChild(TRE);
  });
});
