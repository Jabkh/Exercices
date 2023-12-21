export default class Pizza {
  name;
  prix;
  ingrédients;
  id;
  
  static count = 0;

  constructor(name, prix,ingrédients) {
    this.name = name;
    this.prix = prix;
    this.ingrédients = ingrédients;
    this.id = Pizza.count++;
  }

  askPrice() {
    console.log(`Le client a choisi une  ${this.name} qui coûte ${this.prix}`);
  }

  // A contrario, des méthodes déclarées statiques n'auront pas accès à l'objet 'this' et ne pourrons exploiter que les champs égalemennt statiques
  howMany() {
    console.log(`La pizza numéro ${this.id}`);
  }

}
