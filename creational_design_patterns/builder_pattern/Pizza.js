export class Pizza {
  constructor() {
    this.dough = "";
    this.sauce = "";
    this.toppings = [];
  }

  showPizza() {
    console.log(
      `Pizza with ${this.dough} dough, ${
        this.sauce
      } sauce, and toppings: ${this.toppings.join(", ")}`
    );
  }
}
