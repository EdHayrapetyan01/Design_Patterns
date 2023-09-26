//   Factory Pattern:

// Factory functions are regular JavaScript functions that return objects.
// They do not require the new keyword to create instances.
// Factory functions can encapsulate logic and return objects with different properties.
// They are often used when you want to create objects with specific configurations or additional functionality.


function createPerson (name, age){
    return {
        name, 
        age,
        sayHi(){
            return 'hello my name is' + name
        }
    }
}

const pers1 = createPerson('John', 18);
const pers2 = createPerson('nelly', 18);
console.log(person1)


// Key Differences:

// Constructor functions are used with the new keyword, while factory functions are invoked like regular functions.
// Constructor functions use the this keyword to set properties, while factory functions return objects directly.
// Factory functions are more flexible and can encapsulate private variables and functions,  
// with oop more often used cunsturctor pattern and with FP Factory.

