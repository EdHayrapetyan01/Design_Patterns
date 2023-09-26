// The Adapter allows two objects with incompatible interfaces to interact with each other.
// Now, what is Adapter Pattern? 
// If we bring the problem from the real domestic world, 
// a adapter is used to connect two or more things which can't be connected with their original sockets.



 
  // XML data
const xmlData = '<data><name>John</name><age>30</age></data>';

// Adapter class
class XMLToJSONAdapter {
  convert(xmlData) {
    // Assuming a simple conversion from XML to JSON
    const jsonData = {
      name: 'John',
      age: 30,
    };
    return jsonData;
  }
}

// Client code
const xmlConverter = new XMLToJSONAdapter();
const jsonData = xmlConverter.convert(xmlData);

console.log(jsonData);