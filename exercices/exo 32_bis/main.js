import People from "./people.js";

document.addEventListener("DOMContentLoaded", () => {
  const myPeoples = [
    new People("John", "DUPONT", "2001-11-07"),
    new People("Clara", "MARTEZ", "1987-04-13"),
  ];

  console.log(myPeoples);

  myPeoples[0].firstname = "Titi";
  myPeoples[1].firstname = 123;

  console.log(myPeoples);

  myPeoples.forEach((p) => {
    const newTDElement = document.createElement("td");
    newTDElement.textContent = `${p.id}: ${p.fullname} (${p.birthDate})`;

    document.getElementById("mon-tbody")?.appendChild(newTDElement);
  });
});


console.log(myPeoples);

    document.getElementById("delete-btn")?.addEventListener("click", () => {
      const value = document.getElementById("id-to-del")?.value;

      if (value) {
        console.log(value);
        const elementFound = document.querySelector(
          `[data-demo-person-name="${value}"]`
        );
        // elementFound.textContent = "FOUND !";
        elementFound?.remove();
      }
    });

    // Pour pouvoir utiliser la classe Animal, on va l'importer

    // On instancie un tableau d'animaux vide

    // On réalise la partie visuelle via ajout d'un <tr> à notre <tbody> comme vu précédemment

    document.getElementById("btn-show-modal")?.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  
    // Pour rendre disponible la suppression d'un élément du DOM dés sa création
  
    ["John", "Martha", "Chloée"].forEach((p, i) => {
      const newLIElement = document.createElement("li");
      newLIElement.textContent = p;
      // newLIElement.className = "vos classes"
      // newLIElement.classList.add("nouvelle-classe")
      newLIElement.setAttribute("data-demo-person-name", p);
      newLIElement.addEventListener("click", () => {
        newLIElement.remove();
      });
  
      document.getElementById("mon-ul")?.appendChild(newLIElement);
  
      const newTRElement = document.createElement("tr");
      const idTDElement = document.createElement("td");
      idTDElement.textContent = i;
      const nameTDElement = document.createElement("td");
      nameTDElement.textContent = p;
      const actionsTDElement = document.createElement("td");
      const deleteBTNElement = document.createElement("button");
      deleteBTNElement.textContent = "Delete";
      deleteBTNElement.addEventListener("click", () => {
        newTRElement.remove();
      });
      actionsTDElement.appendChild(deleteBTNElement);
      newTRElement.appendChild(idTDElement);
      newTRElement.appendChild(nameTDElement);
      newTRElement.appendChild(actionsTDElement);
      document.getElementById("mon-tbody")?.appendChild(newTRElement);
    });
  
    document.getElementById("delete-btn")?.addEventListener("click", () => {
      const value = document.getElementById("id-to-del")?.value;
  
      if (value) {
        console.log(value);
        const elementFound = document.querySelector(
          `[data-demo-person-name="${value}"]`
        );
        // elementFound.textContent = "FOUND !";
        elementFound?.remove();
      }
    });