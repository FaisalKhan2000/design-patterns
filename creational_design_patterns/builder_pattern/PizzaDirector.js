import { PizzaBuilder } from "./PizzaBuilder";

export class PizzaDirector {
  constructHawaiianPizza() {
    return new PizzaBuilder()
      .setDough("thin")
      .setSauce("tomato")
      .addTopping("ham")
      .addTopping("pineapple")
      .build();
  }

  constructPepperoniPizza() {
    return new PizzaBuilder()
      .setDough("thick")
      .setSauce("tomato")
      .addTopping("pepperoni")
      .addTopping("cheese")
      .build();
  }
}
