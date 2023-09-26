
// The builder pattern is a design pattern used to construct complex objects step by step.
//  It separates the construction of an object from its representation, 
// allowing you to create different variations of an object with ease.

 
// Imagine you want to build a house, but houses can have many different configurations
//  (e.g., number of rooms, type of roof, paint color). Instead of having a single constructor 
// with numerous parameters, the builder pattern provides a separate builder class. 
// You use the builder to set each aspect of the house step by step, 
// and then you create the house with all the desired specifications at once.

// Key Points:

// Separates the construction process from the final object.
// Allows you to build complex objects by setting properties one by one.
// Provides a clean and readable way to create objects with many options or configurations.
 
  // House Builder
  class HouseBuilder {
    constructor() {
      this.house = {};
    }
  
    setWalls(walls) {
      this.house.walls = walls;
      return this;
    }
  
    setRoof(roof) {
      this.house.roof = roof;
      return this;
    }
  
    setPaintColor(color) {
      this.house.paintColor = color;
      return this;
    }
  
    build() {
      return this.house;
    }
  }
  
  // Usage
  const myDreamHouse = new HouseBuilder()
    .setWalls('Brick')
    .setRoof('Tile')
    .setPaintColor('Blue')
    .build();
  
  console.log(myDreamHouse);
  
  
  // In this example, the builder pattern allows you to create a House object with
  //  specific attributes step by step. It offers flexibility and readability when constructing
  //  objects with multiple options.


  // In summary, the builder pattern offers improved code readability, 
  // flexibility, immutability, and ease of extension compared to constructors, 
  // making it a valuable choice in many object creation scenarios.

  // Builders use method chaining, which allows for more expressive and readable code.
  //  Instead of a long list of constructor parameters, you can set each property with a clear method call.