export default class People {
  #firstname;
  #lastname;
  #birthdate;
  firstname;
  lastname;
  birthdate;
  id;
  
  static count = 0;

  constructor(firstname,lastname,birthdate) {
    this.id = People.count++;
    this.#firstname = firstname;
    this.#lastname = lastname;
    this.#birthdate = birthdate;
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthdate = birthdate;
    
  }

  get firstname() {
    return this.#firstname
  }
  
  // Pour pouvoir rendre possible la modification des champs privés d'une classe, on va passer par un setter, donc la syntaxe est la suivante
  set firstname(value) {
    // Vu qu''il s'agit d'une fonction, il est possible d'y mettre du code. Ce code peut être synchrone ou non via un getter / setter 'async'
    if (typeof value !== 'number') {
      this.#firstname = value;
    } else {
      console.error("Pas de nombres pour un nom de chat!");
    }
  }

  get lastname() {
    return this.#lastname
  }
  
  // Pour pouvoir rendre possible la modification des champs privés d'une classe, on va passer par un setter, donc la syntaxe est la suivante
  set lastname(value) {
    // Vu qu''il s'agit d'une fonction, il est possible d'y mettre du code. Ce code peut être synchrone ou non via un getter / setter 'async'

      this.#lastname = value;
  
  }

  get birthdate() {
    return this.#birthdate
  }
  
  // Pour pouvoir rendre possible la modification des champs privés d'une classe, on va passer par un setter, donc la syntaxe est la suivante
  set birthdate(value) {
    // Vu qu''il s'agit d'une fonction, il est possible d'y mettre du code. Ce code peut être synchrone ou non via un getter / setter 'async'
      this.#birthdate = value;
  }
}
