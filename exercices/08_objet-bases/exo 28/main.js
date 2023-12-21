// document.addEventListener("DOMContentLoaded", () => {
//   // Cette fonction sera exécutée en cas de clic sur le bouton
//   document.querySelector("button#add-btn").addEventListener("click", () => {
//     // On sélectionne l'input de notre page
//     const inputElement = document.getElementById("mon-input");
//     // On en extrait le texte et on en retire les espaces au début et / ou à la fin de la chaine de caractère
//     const text = inputElement.value.trim();
//     if (text) {
//       // On créé une balise <li> vierge
//       const newTdElment = document.createElement("td");
//       // On fixe le contenu textuel de notre <li>
//       newTdElment.textContent = text;
//       // On ajoute la balise <li> remplie du texte à la fin de la balise <ul> (.appendChild() place l'élément avant la balise fermante)
//       document.getElementById("result").appendChild(newTdElment);
//     }
//   });
// });


let personnes = [];
let tabpeople = personnes.push(new Personne);
class Personne {
  constructor(){
    this.id = ++peopleCount;
    this.lastName = myInput1.value;
    this.firstName = myInput2.value;
    this.birthDate = myInput3.value;
  }
}

console.log(personnes);

const myInput1 = document.getElementById("myInput1");
const myInput2 = document.getElementById("myInput2");
const myInput3 = document.getElementById("myInput3");

function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblHead =document.createElement("thead");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < 3; i++) {
    // creates a table row
    const row = document.createElement("tr");
    const textrow1 = myInput1.textContent;
    const textrow2 = myInput2.textContent;
    const textrow3 = myInput3.textContent;

    
    for (let j = 0; j < 3; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`cell in row ${myInput}${i}, column ${personne}${[j]}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}

