
let lastName = prompt("Saisir Nom");

let firstName = prompt("Saisir Prénom");

let messageLastname = `Votre Nom est ${lastName}`;

let messageFirstname = `Votre Prénom est ${firstName}`;

document.getElementById("1").textContent = messageFirstname;

document.getElementById("2").textContent = messageLastname;