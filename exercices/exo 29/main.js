document.addEventListener("DOMContentLoaded", () => {
  // On récupère nos éléments dans le DOM
  const myForm = document.getElementById("myForm");
  const pseudoValidation = document.getElementById('pseudoValidation');
  const passwordValidation = document.getElementById('passwordValidation');
  const submitBtnElement = document.getElementById('submit-btn')
  const myPseudo = document.getElementById("myPseudo");
  const myPassword = document.getElementById("myPassword");

  const userDetails = {
    username: myPseudo.value,
    password: myPassword.value,
  };

  // On se branche sur l'envoi du formulaire de sorte à intercepter l'envoi d'une requête (celle-ci aurait causé le rechargement de la page)
  myForm.addEventListener("submit", (event) => {
    event.preventDefault(); // On empêche le fonctionnement par défaut ici (envoi de la requête + rechargement de la page)
    console.log(userDetails);
  });


  // Pour faire de la validation d'un champ, en temps réel, on se branche sur l'évènement 'input' déclenché lors de la saisie de texte
  myPseudo.addEventListener("input", (event) => {
    const inputElement = event.target;

    if (!inputElement.value) {
      // Via le JS, on peut modifier le style des éléments
      inputElement.style.backgroundColor = "orange";
      pseudoValidation.style.display = 'inline'

      // On peut également modifier les attributs des balises HTML
      submitBtnElement.setAttribute('disabled', '');
    } else {
      inputElement.style.backgroundColor = "white";
      pseudoValidation.style.display = 'none'
      submitBtnElement.removeAttribute('disabled');
    }
  });

  myPassword.addEventListener("input", (event) => {
    const inputElement = event.target;

    if (!inputElement.value) {
      // Via le JS, on peut modifier le style des éléments
      inputElement.style.backgroundColor = "orange";
      passwordValidation.style.display = 'inline'

      // On peut également modifier les attributs des balises HTML
      submitBtnElement.setAttribute('disabled', '');
    } else {
      inputElement.style.backgroundColor = "white";
      passwordValidation.style.display = 'none'
      submitBtnElement.removeAttribute('disabled');
    }
  });
});
