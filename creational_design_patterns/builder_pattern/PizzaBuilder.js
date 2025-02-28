import { Pizza } from "./Pizza";

export class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza();
  }

  setDough(dough) {
    this.pizza.dough = dough;
    return this;
  }

  setSauce(sauce) {
    this.pizza.sauce = sauce;
    return this;
  }

  addTopping(topping) {
    this.pizza.toppings.push(topping);
    return this;
  }

  build() {
    return this.pizza;
  }
}
