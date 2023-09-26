// Decorator Pattern
// The Decorator pattern lets you attach new behaviors to objects 
// by placing them inside wrapper objects that contain the behaviors. 
// If you're somewhat familiar with React and higher order components (HOC) this kind of approach probably rings a bell for you.

// The Decorator pattern allows you to add or modify the behavior of an object dynamically, without changing its underlying structure

// Base Coffee class
class Coffee {
    cost() {
      return 5; // The base cost of a basic coffee
    }
  
    getDescription() {
      return "Basic Coffee"; // Description of basic coffee
    }
  }
  
  // Decorator for Caramel Syrup
  class CaramelDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    cost() {
      return this.coffee.cost() + 2; // Add the cost of caramel syrup
    }
  
    getDescription() {
      return this.coffee.getDescription() + ", Caramel Syrup"; // Add caramel syrup to the description
    }
  }
  
  
  // Decorator for Chocolate Shavings
  class ChocolateDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    cost() {
      return this.coffee.cost() + 3; // Add the cost of chocolate shavings
    }
  
    getDescription() {
      return this.coffee.getDescription() + ", Chocolate Shavings"; // Add chocolate shavings to the description
    }
  }
  
  // Usage
  let myCoffee = new Coffee(); // Order a basic coffee
  console.log(myCoffee.getDescription()); // Output: "Basic Coffee"
  console.log("Cost: $" + myCoffee.cost()); // Output: "Cost: $5"
  
  myCoffee = new CaramelDecorator(myCoffee); // Add caramel syrup
  console.log(myCoffee.getDescription()); // Output: "Basic Coffee, Caramel Syrup"
  console.log("Cost: $" + myCoffee.cost()); // Output: "Cost: $7"
  
 
  myCoffee = new ChocolateDecorator(myCoffee); // Add chocolate shavings
  console.log(myCoffee.getDescription()); // Output: "Basic Coffee, Caramel Syrup, Chocolate Shavings"
  console.log("Cost: $" + myCoffee.cost()); // Output: "Cost: $11"
  