// The prototype pattern is a creational design pattern.
//  Prototype patterns are required, when object creation is time consuming, and costly operation, 
// so we create objects with the existing object itself. One of the best available ways to create an object from existing objects is the clone() method.


// Define a prototype object
const car = {
    start(){
        console.log('car started...')
    },
    stop(){
        console.log('car stoped...')
    }
}

myCar.drive = function () {
    console.log("Car is driving...");
  };
  
  // Call the new method
  myCar.drive(); // Output: Car is driving...
  

const myCar = Object.create(car);

 

// The primary benefit of using the Prototype Pattern to create objects in JavaScript is efficiency and reduced memory consumption. When you create an object using a prototype, you're essentially cloning an existing object and inheriting its properties and methods. This is advantageous for several reasons:

// Memory Efficiency: Instead of duplicating the properties and methods for each new object, they are shared among all objects created from the same prototype. This results in lower memory usage, especially when you have many objects of the same type.

// Performance: Since methods are shared via the prototype, there's only one