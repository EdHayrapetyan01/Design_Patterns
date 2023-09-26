// Constructor pattern

// Constructor functions are used with the new keyword to create instances of objects.
// They typically start with a capitalized name (convention), like Person.
// Inside a constructor function, you define properties and methods using the this keyword.
// Constructor functions are often used when you want to create multiple instances of objects with similar properties and methods.

// ------------------------------------------
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);


