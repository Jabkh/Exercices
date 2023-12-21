import Pizza from "./pizza.js";
import { add, sub, MON_SECRET } from "./mesFontions.js";
document.addEventListener("DOMContentLoaded", () => {

const Pizza1 = new Pizza("Margarita", 8, ["sauce tomate", "fromage", "olive"]);

const Pizza2 = new Pizza("Regina", 10, ["sauce tomate", "fromage", "jambon"]);

const Pizza3 = new Pizza("Salmone", 11, ["crême fraîche", "saumon", "aneth"]);
// Pour appeller une méthode, on passe par la notation 'nomVarObj.nomMethode()'
Pizza1.askPrice();
Pizza3.howMany();

console.log(Pizza1);
console.log(Pizza2);
console.log(Pizza.count);

console.log(Pizza3);

let menu = [];

menu.push(Pizza1,Pizza2,Pizza3);

console.log(menu);


  // Ici pour le code afin d'attendre le chargement de la page et éviter les erreurs de récupération des IDs dans l'HTML

  // On écoute le clic du bouton avec l'id 'add-btn'
  document.getElementById("add-btn")?.addEventListener("click", () => {
    // On récupère les élément dans l'HTML
    const firstnameElement = document.getElementById("name");
    const lastnameElement = document.getElementById("prix");
    const birthDateElement = document.getElementById("ingrédients");




    // On cible notre balise <tbody>
    const tBody = document.getElementById("tbody-result");

    // On créé une balise <tr>
    const newTR = document.createElement("tr");

    // On parcourt une par une les clés dans l'objet 'newPeople'
    for (const key in menu) {
      // On créé une balise <td> pour chaque clé de notre objet
      const newTD = document.createElement("td");

      // ON place dans son contenu la valeur de la clé actuellement parcourue
      newTD.textContent = menu[key];

      // On ajoute la cellule du tableau à la ligne de tableau en court de création
      newTR.appendChild(newTD);
    }

    // On ajoute la ligne remplie à notre tableau (à la fin)
    tBody.appendChild(newTR);
    
  });
});