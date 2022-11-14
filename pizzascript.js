function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("Deep Dish ", "traditional", ["mozzarella"], ["pepperoni, sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushroom", "olives", "onions"]);
console.log(pizza2);
