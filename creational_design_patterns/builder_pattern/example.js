import { PizzaDirector } from "./PizzaDirector";

const director = new PizzaDirector();

// Create pizzas using the director
const hawaiianPizza = director.constructHawaiianPizza();
const pepperoniPizza = director.constructPepperoniPizza();

// Display the pizzas
hawaiianPizza.showPizza();
pepperoniPizza.showPizza();

// Create a custom pizza using the builder directly
import { PizzaBuilder } from "./PizzaBuilder";
const customPizza = new PizzaBuilder()
  .setDough("stuffed")
  .setSauce("bbq")
  .addTopping("chicken")
  .addTopping("mushrooms")
  .addTopping("onions")
  .build();

customPizza.showPizza();
