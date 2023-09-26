// Singleton Pattern

// Singleton ensures that a class has only one immutable instance.
// the singleton pattern consists of an object that can't be copied or modified.
// It's often useful when we want to have some immutable single point of truth for our application.

// Like REDUX store.
// example of application config;

const Config = {
    start: () => console.log('App has started'),
    update: () => console.log('App has updated'),
  }
  
  //freeze the object to prevent new properties being added or existing properties being modified or removed
  Object.freeze(Config)
  
  Config.start() // "App has started"
  Config.update() // "App has updated"
  
  Config.name = "John Doe"
  console.log(Config) // And verify it doesn't work: { start: [Function: start], update: [Function: update] }

