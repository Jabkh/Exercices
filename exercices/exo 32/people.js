export default class People {
  id;
  firstname;
  lastname;
  birthDate;

  static count = 0;

  constructor(firstname, lastname, birthDate) {
    this.id = ++People.count;
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthDate = birthDate;
  }

  get id() {
    return this.id;
  }

  // Via un Getter, on peut s'assurer d'avoir accès uniquement au nom complet (correctement formaté)
  get fullname() {
    return `${this.toCapitilized(
      this.firstname
    )} ${this.lastname.toUpperCase()}`;
  }

  get birthDate() {
    return this.birthDate;
  }

  // Via un Setter, on peut éviter les modifications non désirées des champs de notre classe par l'extérieur (le reste du code)
  set firstname(value) {
    if (typeof value === "string") {
    } else console.warn("It's not a string!");
  }

  set birthDate(value) {
    if (dateCheck(value)) {
    } else console.warn("It's not a date!");
  }

  toCapitilized(text) {
    return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
  }
}
